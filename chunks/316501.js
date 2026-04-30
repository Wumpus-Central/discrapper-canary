"use strict";
n.d(t, { AD: () => O, Kh: () => _, Pk: () => L, Q_: () => D, Ze: () => R, pF: () => C, sv: () => b }), n(321073);
var i = n(695497),
    r = n.n(i),
    s = n(506774),
    a = n(626584),
    o = n(111162),
    l = n(723702),
    u = n(650583);
let c = new a.A("KeyboardLayoutMapUtils"),
    d = (0, l.isLinux)() ? u.C8 : (0, l.isMac)() ? u.V8 : (0, l.isWindows)() || __OVERLAY__ ? u.Nu : r().codes,
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
function h(e) {
    return null == e ? e : e.toLocaleLowerCase();
}
class p {
    map;
    constructor(e = f) {
        this.map = new Map(
            Object.entries(e).map((e) => {
                let [t, n] = e;
                return [t, h(n)];
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
let E = new p();
async function m() {
    if (__OVERLAY__) return (E = new p()), !1;
    if (navigator.keyboard?.getLayoutMap != null)
        try {
            let e = await navigator.keyboard.getLayoutMap();
            return (E = new p(Object.fromEntries(e.entries()))), !0;
        } catch (e) {
            E = new p();
        }
    return !1;
}
function g(e) {
    let t = new Set(),
        n = {};
    for (let [i, r] of Object.entries(e)) {
        let e = h(i);
        if (t.has(e) && null != n[e] && n[e] !== r) {
            c.error(`Seperate keyCode mappings found for: ${e}`);
            continue;
        }
        t.add(e), (n[e] = r);
    }
    return n;
}
function A(e) {
    return { keyCode: e.keyCode, key: null != e.key ? h(e.key) : void 0, code: e.code };
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
        let i = h(e);
        return (
            n.find((e) => {
                let [t, n] = e;
                return n === i;
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
                        let [n, i] = e;
                        return { key: n, keyCode: i, code: t ?? this.findCodeFromKeyboardLayoutMap(n) };
                    })),
            n.find((n) => {
                let i = n.keyCode === e;
                return null != t ? i && n.code === t : i;
            })?.key
        );
    }
    findExactKeyboardEventMatch(e, t, n) {
        let i = h(e);
        if ((null == t && (t = this.findCodeFromKeyboardLayoutMap(i)), null != n)) {
            let e = this.keyCodeMap[n];
            if (null != e) {
                let n = e.find((e) => h(e.key) === i && e.code === t);
                if (null != n) return n;
            }
        }
        if (null != n && null != t)
            return this.cachedAllEvents.find((e) => {
                let r = h(e.key) === i,
                    s = e.keyCode === n,
                    a = e.code === t;
                return s && r && a;
            });
    }
    getWeightedPossibleKeyStringMatches(e, t, n) {
        return this.cachedAllEvents
            .filter((i) => {
                let r = h(i.key) === h(e),
                    s = null == n || i.keyCode === n,
                    a = null == t || i.code === t;
                return s && r && a;
            })
            .sort((i, r) => {
                let s = (i) => {
                        let r = 0;
                        return (
                            h(i.key) === h(e) && (r += 0.5),
                            null != t && i.code === t && (r += 0.3),
                            null != n && i.keyCode === n && (r += 0.2),
                            r
                        );
                    },
                    a = s(i);
                return s(r) - a;
            });
    }
    findKeyboardEventByKey(e, t, n) {
        let i = h(e);
        if ((null == t && (t = this.findCodeFromKeyboardLayoutMap(i)), null != n)) {
            let e = this.keyCodeMap[n];
            if (null != e) {
                let n = e.find((e) => h(e.key) === i && e.code === t);
                if (null != n) return n;
            }
        }
        let [r] = this.getWeightedPossibleKeyStringMatches(e, t, n);
        return r;
    }
    findKeyboardEventByKeyCode(e, t) {
        let n = this.getKeyString(e, t);
        if ((null == n && null != t && (n = this.getLayoutMap().get(t)), null == n)) {
            let i = this.getKeyCodeMapItem(e);
            n = i.find((n) => {
                let i = n.keyCode === e;
                return null != t ? i && n.code === t : i;
            })?.key;
        }
        return null == n ? this.getDefaultKeyboardEventShape(void 0, e, t) : this.findKeyboardEventByKey(n, t, e);
    }
    getDefaultKeyboardEventShape(e, t, n) {
        let i = null != e ? h(e) : void 0;
        if (null != i) {
            let e = this.keyMap[i];
            if (null == e) return;
            return A({ keyCode: e, key: i, code: n ?? this.findCodeFromKeyboardLayoutMap(i) });
        }
        if (null != t) {
            let e = this.cachedKeyMapEntries.find((e) => {
                let [n, i] = e;
                return i === t;
            })?.[0];
            if (null == e) return;
            return A({ keyCode: t, key: e, code: n ?? this.findCodeFromKeyboardLayoutMap(e) });
        }
    }
}
let N = null,
    y = null;
function C() {
    return null != y
        ? y
        : (y = new Promise(async (e) => {
              await m(),
                  (N = new S(d)),
                  document.addEventListener("keydown", (e) => {
                      try {
                          N?.addEvent(e);
                      } catch (t) {
                          c.error("KeyboardMapper - Error adding event", { event: e, error: t });
                      }
                  }),
                  e();
          }));
}
function v() {
    return null == N ? (C(), null) : N;
}
async function O() {
    await m(), v()?.reset();
}
function R() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return e ? E : (v()?.getLayoutMap() ?? E);
}
function b(e) {
    let t = A(e);
    return null != t.key ? (v()?.findExactKeyboardEventMatch(t.key, t.code, t.keyCode) ?? null) : null;
}
function D(e) {
    let t = null != e ? h(e) : void 0;
    if (null == t) return null;
    let n = (function (e) {
            let t = null != e ? h(e) : void 0;
            if (null != t) return v()?.findCodeFromKeyboardLayoutMap(t) ?? void 0;
        })(t),
        i = v()?.findKeyboardEventByKey(t, n) ?? null;
    if (null != i) return i;
    try {
        let e = v()?.getDefaultKeyboardEventShape(t, void 0, n) ?? null;
        if (null == e) return null;
        let i = new KeyboardEvent("keydown", e);
        return A({ keyCode: i.keyCode, key: i.key, code: i.code });
    } catch (e) {
        return null;
    }
}
function L(e) {
    let t = v()?.findKeyboardEventByKeyCode(e) ?? null;
    if (null != t) return t;
    try {
        let t = v()?.getDefaultKeyboardEventShape(void 0, e) ?? null;
        if (null == t) return null;
        let n = new KeyboardEvent("keydown", t);
        return A({ keyCode: n.keyCode, key: n.key, code: n.code });
    } catch (e) {
        return null;
    }
}
