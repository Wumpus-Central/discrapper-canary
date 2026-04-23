"use strict";
n.d(t, { AD: () => O, Kh: () => _, Pk: () => L, Q_: () => D, Ze: () => R, pF: () => v, sv: () => b }), n(321073);
var r = n(695497),
    i = n.n(r),
    s = n(506774),
    a = n(626584),
    o = n(111162),
    l = n(723702),
    u = n(650583);
let c = new a.A("KeyboardLayoutMapUtils"),
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
let E = new h();
async function m() {
    if (__OVERLAY__) return (E = new h()), !1;
    if (navigator.keyboard?.getLayoutMap != null)
        try {
            let e = await navigator.keyboard.getLayoutMap();
            return (E = new h(Object.fromEntries(e.entries()))), !0;
        } catch (e) {
            E = new h();
        }
    return !1;
}
function g(e) {
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
function A(e) {
    return { keyCode: e.keyCode, key: null != e.key ? p(e.key) : void 0, code: e.code };
}
let I = "keyboard-layout-map";
class T {
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
        const t = s.w.get(I) ?? null;
        null != t ? (this.keyMap = t) : (this.keyMap = g({ ...e })),
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
        let e = E;
        (this._internalKeyLayoutMap = new Map(Array.from(e.entries()))), this._setCachedKeyLayoutMapEntries();
    }
    _hasExactMatch(e) {
        if (null == e.keyCode) return !1;
        let t = this.keyCodeMap[e.keyCode];
        return null != t && t.some((t) => t.key === e.key && t.code === e.code && t.keyCode === e.keyCode);
    }
    addEvent(e) {
        let t = A(e);
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
            (this.keyMap = g({ ...this._defaultKeyMap })),
            this._initializeInternalLayoutMap(),
            (this.keyCodeMap = this._buildKeyCodeMapFromKeyMap()),
            this.updateCaches(),
            this.save();
    }
    save() {
        var e;
        (e = this.keyMap), s.w.set(I, e);
    }
    getLayoutMap() {
        return null == this._internalKeyLayoutMap ? E : this._internalKeyLayoutMap;
    }
    getKeyCode(e) {
        return this.keyMap[e];
    }
    findCodeFromKeyboardLayoutMap(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.cachedKeyLayoutMapEntries;
        t && (n = Array.from(E.entries()));
        let r = p(e);
        return (
            n.find((e) => {
                let [t, n] = e;
                return n === r;
            })?.[0] ?? e
        );
    }
}
class S extends T {
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
                    s = e.keyCode === n,
                    a = e.code === t;
                return s && i && a;
            });
    }
    getWeightedPossibleKeyStringMatches(e, t, n) {
        return this.cachedAllEvents
            .filter((r) => {
                let i = p(r.key) === p(e),
                    s = null == n || r.keyCode === n,
                    a = null == t || r.code === t;
                return s && i && a;
            })
            .sort((r, i) => {
                let s = (r) => {
                        let i = 0;
                        return (
                            p(r.key) === p(e) && (i += 0.5),
                            null != t && r.code === t && (i += 0.3),
                            null != n && r.keyCode === n && (i += 0.2),
                            i
                        );
                    },
                    a = s(r);
                return s(i) - a;
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
            return A({ keyCode: e, key: r, code: n ?? this.findCodeFromKeyboardLayoutMap(r) });
        }
        if (null != t) {
            let e = this.cachedKeyMapEntries.find((e) => {
                let [n, r] = e;
                return r === t;
            })?.[0];
            if (null == e) return;
            return A({ keyCode: t, key: e, code: n ?? this.findCodeFromKeyboardLayoutMap(e) });
        }
    }
}
let y = null,
    N = null;
function v() {
    return null != N
        ? N
        : (N = new Promise(async (e) => {
              await m(),
                  (y = new S(d)),
                  document.addEventListener("keydown", (e) => {
                      try {
                          y?.addEvent(e);
                      } catch (t) {
                          c.error("KeyboardMapper - Error adding event", { event: e, error: t });
                      }
                  }),
                  e();
          }));
}
function C() {
    return null == y ? (v(), null) : y;
}
async function O() {
    await m(), C()?.reset();
}
function R() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return e ? E : (C()?.getLayoutMap() ?? E);
}
function b(e) {
    let t = A(e);
    return null != t.key ? (C()?.findExactKeyboardEventMatch(t.key, t.code, t.keyCode) ?? null) : null;
}
function D(e) {
    let t = null != e ? p(e) : void 0;
    if (null == t) return null;
    let n = (function (e) {
            let t = null != e ? p(e) : void 0;
            if (null != t) return C()?.findCodeFromKeyboardLayoutMap(t) ?? void 0;
        })(t),
        r = C()?.findKeyboardEventByKey(t, n) ?? null;
    if (null != r) return r;
    try {
        let e = C()?.getDefaultKeyboardEventShape(t, void 0, n) ?? null;
        if (null == e) return null;
        let r = new KeyboardEvent("keydown", e);
        return A({ keyCode: r.keyCode, key: r.key, code: r.code });
    } catch (e) {
        return null;
    }
}
function L(e) {
    let t = C()?.findKeyboardEventByKeyCode(e) ?? null;
    if (null != t) return t;
    try {
        let t = C()?.getDefaultKeyboardEventShape(void 0, e) ?? null;
        if (null == t) return null;
        let n = new KeyboardEvent("keydown", t);
        return A({ keyCode: n.keyCode, key: n.key, code: n.code });
    } catch (e) {
        return null;
    }
}
