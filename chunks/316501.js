"use strict";
n.d(t, { AD: () => D, Kh: () => _, Pk: () => M, Q_: () => P, Ze: () => L, pF: () => R, sv: () => x }), n(321073);
var r = n(695497),
    i = n.n(r),
    a = n(506774),
    s = n(626584),
    o = n(111162),
    l = n(723702),
    u = n(650583);
let c = new s.A("KeyboardLayoutMapUtils"),
    d = (0, l.isLinux)() ? u.C8 : (0, l.isMac)() ? u.V8 : (0, l.isWindows)() || __OVERLAY__ ? u.Nu : i().codes,
    _ = new Set([192, 220, 222, 223, 229]),
    f = Object.freeze({
        KeyA: "a",
        KeyB: "b",
        KeyC: "c",
        KeyD: "d",
        KeyE: "e",
        KeyF: "f",
        KeyG: "g",
        KeyH: "h",
        KeyI: "i",
        KeyJ: "j",
        KeyK: "k",
        KeyL: "l",
        KeyM: "m",
        KeyN: "n",
        KeyO: "o",
        KeyP: "p",
        KeyQ: "q",
        KeyR: "r",
        KeyS: "s",
        KeyT: "t",
        KeyU: "u",
        KeyV: "v",
        KeyW: "w",
        KeyX: "x",
        KeyY: "y",
        KeyZ: "z",
        Digit0: "0",
        Digit1: "1",
        Digit2: "2",
        Digit3: "3",
        Digit4: "4",
        Digit5: "5",
        Digit6: "6",
        Digit7: "7",
        Digit8: "8",
        Digit9: "9",
        Backquote: "`",
        Backslash: "\\",
        Quote: "'",
        Slash: "/",
        Comma: ",",
        Period: ".",
        Semicolon: ";",
        Equal: "=",
        Minus: "-",
        BracketLeft: "[",
        BracketRight: "]",
        IntlBackslash: "\xa7",
    });
function p(e) {
    return null == e ? e : e.toLocaleLowerCase();
}
class h {
    map;
    constructor(e = f) {
        this.map = new Map(
            Object.entries(e).map((e) => {
                let [t, n] = e;
                return [t, p(n)];
            }),
        );
    }
    get(e) {
        return this.map.get(e);
    }
    has(e) {
        return this.map.has(e);
    }
    keys() {
        return this.map.keys();
    }
    values() {
        return this.map.values();
    }
    entries() {
        return this.map.entries();
    }
    forEach(e, t) {
        return this.map.forEach(e, t);
    }
    get size() {
        return this.map.size;
    }
    _set(e, t) {
        this.map.set(e, t);
    }
}
let m = new h();
async function g() {
    if (__OVERLAY__) return (m = new h()), !1;
    if (navigator.keyboard?.getLayoutMap != null)
        try {
            let e = await navigator.keyboard.getLayoutMap();
            return (m = new h(Object.fromEntries(e.entries()))), !0;
        } catch (e) {
            m = new h();
        }
    return !1;
}
function E() {
    return m;
}
function A(e) {
    let t = new Set(),
        n = {};
    for (let [r, i] of Object.entries(e)) {
        let e = p(r);
        if (t.has(e) && null != n[e] && n[e] !== i) {
            c.error(`Seperate keyCode mappings found for: ${e}`);
            continue;
        }
        t.add(e), (n[e] = i);
    }
    return n;
}
function I(e) {
    return { keyCode: e.keyCode, key: null != e.key ? p(e.key) : void 0, code: e.code };
}
let T = "keyboard-layout-map";
function y() {
    return a.w.get(T) ?? null;
}
function S(e) {
    a.w.set(T, e);
}
class v {
    keyCodeMap;
    keyMap;
    _internalKeyLayoutMap = null;
    _defaultKeyMap;
    _cachedKeyCodeMapEntries = [];
    _cachedKeyMapEntries = [];
    _cachedKeyLayoutMapEntries = [];
    _cachedAllEvents = [];
    constructor(e = {}) {
        this._defaultKeyMap = e;
        const t = y();
        null != t ? (this.keyMap = t) : (this.keyMap = A({ ...e })),
            this._initializeInternalLayoutMap(),
            (this.keyCodeMap = this._buildKeyCodeMapFromKeyMap()),
            this.updateCaches(),
            this.save();
    }
    _setCachedKeyCodeMapEntries() {
        (this._cachedKeyCodeMapEntries = Object.entries(this.keyCodeMap).map((e) => {
            let [t, n] = e;
            return [Number(t), n];
        })),
            (this._cachedAllEvents = this._cachedKeyCodeMapEntries.flatMap((e) => {
                let [t, n] = e;
                return n;
            }));
    }
    _setCachedKeyMapEntries() {
        this._cachedKeyMapEntries = Object.entries(this.keyMap);
    }
    _setCachedKeyLayoutMapEntries() {
        this._cachedKeyLayoutMapEntries = Array.from(this.getLayoutMap().entries());
    }
    get cachedKeyCodeMapEntries() {
        return (
            0 === this._cachedKeyCodeMapEntries.length && this._setCachedKeyCodeMapEntries(),
            this._cachedKeyCodeMapEntries
        );
    }
    get cachedKeyMapEntries() {
        return 0 === this._cachedKeyMapEntries.length && this._setCachedKeyMapEntries(), this._cachedKeyMapEntries;
    }
    get cachedKeyLayoutMapEntries() {
        return (
            0 === this._cachedKeyLayoutMapEntries.length && this._setCachedKeyLayoutMapEntries(),
            this._cachedKeyLayoutMapEntries
        );
    }
    get cachedAllEvents() {
        return 0 === this._cachedAllEvents.length && this._setCachedKeyCodeMapEntries(), this._cachedAllEvents;
    }
    getKeyCodeMapItem(e) {
        return null == this.keyCodeMap[e] && (this.keyCodeMap[e] = []), this.keyCodeMap[e];
    }
    _buildKeyCodeMapFromKeyMap() {
        let e = {};
        for (let [t, n] of Object.entries(this.keyMap))
            (e[n] = e[n] ?? []), e[n].push({ keyCode: n, key: t, code: this.findCodeFromKeyboardLayoutMap(t, !0) });
        return e;
    }
    _initializeInternalLayoutMap() {
        let e = E();
        (this._internalKeyLayoutMap = new Map(Array.from(e.entries()))), this._setCachedKeyLayoutMapEntries();
    }
    _hasExactMatch(e) {
        if (null == e.keyCode) return !1;
        let t = this.keyCodeMap[e.keyCode];
        return null != t && t.some((t) => t.key === e.key && t.code === e.code && t.keyCode === e.keyCode);
    }
    addEvent(e) {
        let t = I(e);
        null == this._internalKeyLayoutMap && this._initializeInternalLayoutMap(),
            this._hasExactMatch(t) ||
                (null != t.key &&
                    "dead" !== t.key &&
                    (null == this.keyMap[t.key]
                        ? (this.keyMap[t.key] = t.keyCode)
                        : this.keyMap[t.key] !== t.keyCode &&
                          o.default.logKeyboardMismatches &&
                          c.error(
                              `KeyboardMapper - Key code mismatch for key ${t.key}: ${this.keyMap[t.key]} !== ${t.keyCode}`,
                          ),
                    (this.keyCodeMap[t.keyCode] = this.keyCodeMap[t.keyCode] ?? []),
                    this.keyCodeMap[t.keyCode].push(t),
                    this._internalKeyLayoutMap?.set(t.code, t.key),
                    this.updateCaches()));
    }
    updateCaches() {
        this._setCachedKeyCodeMapEntries(), this._setCachedKeyMapEntries(), this._setCachedKeyLayoutMapEntries();
    }
    reset() {
        (this._internalKeyLayoutMap = null),
            (this.keyMap = A({ ...this._defaultKeyMap })),
            this._initializeInternalLayoutMap(),
            (this.keyCodeMap = this._buildKeyCodeMapFromKeyMap()),
            this.updateCaches(),
            this.save();
    }
    save() {
        S(this.keyMap);
    }
    getLayoutMap() {
        return null == this._internalKeyLayoutMap ? E() : this._internalKeyLayoutMap;
    }
    getKeyCode(e) {
        return this.keyMap[e];
    }
    findCodeFromKeyboardLayoutMap(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.cachedKeyLayoutMapEntries;
        t && (n = Array.from(E().entries()));
        let r = p(e);
        return (
            n.find((e) => {
                let [t, n] = e;
                return n === r;
            })?.[0] ?? e
        );
    }
}
class C extends v {
    getKeyString(e, t) {
        let n = this.getKeyCodeMapItem(e);
        return (
            0 === n.length &&
                (n = this.cachedKeyMapEntries
                    .filter((e) => {
                        let [t, n] = e;
                        return n == n;
                    })
                    .map((e) => {
                        let [n, r] = e;
                        return { key: n, keyCode: r, code: t ?? this.findCodeFromKeyboardLayoutMap(n) };
                    })),
            n.find((n) => {
                let r = n.keyCode === e;
                return null != t ? r && n.code === t : r;
            })?.key
        );
    }
    findExactKeyboardEventMatch(e, t, n) {
        let r = p(e);
        if ((null == t && (t = this.findCodeFromKeyboardLayoutMap(r)), null != n)) {
            let e = this.keyCodeMap[n];
            if (null != e) {
                let n = e.find((e) => p(e.key) === r && e.code === t);
                if (null != n) return n;
            }
        }
        if (null != n && null != t)
            return this.cachedAllEvents.find((e) => {
                let i = p(e.key) === r,
                    a = e.keyCode === n,
                    s = e.code === t;
                return a && i && s;
            });
    }
    getWeightedPossibleKeyStringMatches(e, t, n) {
        return this.cachedAllEvents
            .filter((r) => {
                let i = p(r.key) === p(e),
                    a = null == n || r.keyCode === n,
                    s = null == t || r.code === t;
                return a && i && s;
            })
            .sort((r, i) => {
                let a = (r) => {
                        let i = 0;
                        return (
                            p(r.key) === p(e) && (i += 0.5),
                            null != t && r.code === t && (i += 0.3),
                            null != n && r.keyCode === n && (i += 0.2),
                            i
                        );
                    },
                    s = a(r);
                return a(i) - s;
            });
    }
    findKeyboardEventByKey(e, t, n) {
        let r = p(e);
        if ((null == t && (t = this.findCodeFromKeyboardLayoutMap(r)), null != n)) {
            let e = this.keyCodeMap[n];
            if (null != e) {
                let n = e.find((e) => p(e.key) === r && e.code === t);
                if (null != n) return n;
            }
        }
        let [i] = this.getWeightedPossibleKeyStringMatches(e, t, n);
        return i;
    }
    findKeyboardEventByKeyCode(e, t) {
        let n = this.getKeyString(e, t);
        if ((null == n && null != t && (n = this.getLayoutMap().get(t)), null == n)) {
            let r = this.getKeyCodeMapItem(e);
            n = r.find((n) => {
                let r = n.keyCode === e;
                return null != t ? r && n.code === t : r;
            })?.key;
        }
        return null == n ? this.getDefaultKeyboardEventShape(void 0, e, t) : this.findKeyboardEventByKey(n, t, e);
    }
    getDefaultKeyboardEventShape(e, t, n) {
        let r = null != e ? p(e) : void 0;
        if (null != r) {
            let e = this.keyMap[r];
            if (null == e) return;
            return I({ keyCode: e, key: r, code: n ?? this.findCodeFromKeyboardLayoutMap(r) });
        }
        if (null != t) {
            let e = this.cachedKeyMapEntries.find((e) => {
                let [n, r] = e;
                return r === t;
            })?.[0];
            if (null == e) return;
            return I({ keyCode: t, key: e, code: n ?? this.findCodeFromKeyboardLayoutMap(e) });
        }
    }
}
let b = null,
    N = null;
function R() {
    return null != N
        ? N
        : (N = new Promise(async (e) => {
              await g(),
                  (b = new C(d)),
                  document.addEventListener("keydown", (e) => {
                      try {
                          b?.addEvent(e);
                      } catch (t) {
                          c.error("KeyboardMapper - Error adding event", { event: e, error: t });
                      }
                  }),
                  e();
          }));
}
function O() {
    return null == b ? (R(), null) : b;
}
async function D() {
    await g(), O()?.reset();
}
function L() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return e ? E() : (O()?.getLayoutMap() ?? E());
}
function w(e) {
    let t = null != e ? p(e) : void 0;
    if (null != t) return O()?.findCodeFromKeyboardLayoutMap(t) ?? void 0;
}
function x(e) {
    let t = I(e);
    return null != t.key ? (O()?.findExactKeyboardEventMatch(t.key, t.code, t.keyCode) ?? null) : null;
}
function P(e) {
    let t = null != e ? p(e) : void 0;
    if (null == t) return null;
    let n = w(t),
        r = O()?.findKeyboardEventByKey(t, n) ?? null;
    if (null != r) return r;
    try {
        let e = O()?.getDefaultKeyboardEventShape(t, void 0, n) ?? null;
        if (null == e) return null;
        let r = new KeyboardEvent("keydown", e);
        return I({ keyCode: r.keyCode, key: r.key, code: r.code });
    } catch (e) {
        return null;
    }
}
function M(e) {
    let t = O()?.findKeyboardEventByKeyCode(e) ?? null;
    if (null != t) return t;
    try {
        let t = O()?.getDefaultKeyboardEventShape(void 0, e) ?? null;
        if (null == t) return null;
        let n = new KeyboardEvent("keydown", t);
        return I({ keyCode: n.keyCode, key: n.key, code: n.code });
    } catch (e) {
        return null;
    }
}
