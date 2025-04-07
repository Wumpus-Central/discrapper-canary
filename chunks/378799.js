n.d(t, {
    SW: () => A,
    T_: () => w,
    _v: () => D,
    jd: () => P,
    pz: () => C,
    s5: () => T
}),
    n(388685),
    n(467055),
    n(361932),
    n(187205),
    n(539854);
var r = n(921738),
    i = n.n(r),
    o = n(259443),
    a = n(433517),
    s = n(358085),
    l = n(981631);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
let d = new o.Yd('KeyboardLayoutMapUtils'),
    f = (0, s.isLinux)() ? l.HsE : (0, s.isMac)() ? l.REU : (0, s.isWindows)() || __OVERLAY__ ? l.iC$ : i().codes,
    _ = 'keyboardMapper.keyMap',
    p = Object.freeze({
        KeyA: 'a',
        KeyB: 'b',
        KeyC: 'c',
        KeyD: 'd',
        KeyE: 'e',
        KeyF: 'f',
        KeyG: 'g',
        KeyH: 'h',
        KeyI: 'i',
        KeyJ: 'j',
        KeyK: 'k',
        KeyL: 'l',
        KeyM: 'm',
        KeyN: 'n',
        KeyO: 'o',
        KeyP: 'p',
        KeyQ: 'q',
        KeyR: 'r',
        KeyS: 's',
        KeyT: 't',
        KeyU: 'u',
        KeyV: 'v',
        KeyW: 'w',
        KeyX: 'x',
        KeyY: 'y',
        KeyZ: 'z',
        Digit0: '0',
        Digit1: '1',
        Digit2: '2',
        Digit3: '3',
        Digit4: '4',
        Digit5: '5',
        Digit6: '6',
        Digit7: '7',
        Digit8: '8',
        Digit9: '9',
        Backquote: '`',
        Backslash: '\\',
        Quote: "'",
        Slash: '/',
        Comma: ',',
        Period: '.',
        Semicolon: ';',
        Equal: '=',
        Minus: '-',
        BracketLeft: '[',
        BracketRight: ']',
        IntlBackslash: '\xA7'
    });
class h {
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
    constructor(e = p) {
        c(this, 'map', void 0), (this.map = new Map(Object.entries(e)));
    }
}
let m = new h();
async function g() {
    var e;
    if (__OVERLAY__) return (m = new h()), !1;
    if ((null == (e = navigator.keyboard) ? void 0 : e.getLayoutMap) != null)
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
function b(e) {
    let t = u({}, e);
    return null != t.key && (t.key = t.key.toLocaleLowerCase()), t;
}
function y(e) {
    let t = new Set();
    return Object.fromEntries(
        Object.entries(e).map((e) => {
            let [n, r] = e,
                i = n.toLowerCase();
            return t.has(i) && d.warn('Duplicate key mapping found for: '.concat(i)), t.add(i), [i, r];
        })
    );
}
class v {
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
        return 0 === this._cachedKeyCodeMapEntries.length && this._setCachedKeyCodeMapEntries(), this._cachedKeyCodeMapEntries;
    }
    get cachedKeyMapEntries() {
        return 0 === this._cachedKeyMapEntries.length && this._setCachedKeyMapEntries(), this._cachedKeyMapEntries;
    }
    get cachedKeyLayoutMapEntries() {
        return 0 === this._cachedKeyLayoutMapEntries.length && this._setCachedKeyLayoutMapEntries(), this._cachedKeyLayoutMapEntries;
    }
    get cachedAllEvents() {
        return 0 === this._cachedAllEvents.length && this._setCachedKeyCodeMapEntries(), this._cachedAllEvents;
    }
    getKeyCodeMapItem(e) {
        return null == this.keyCodeMap[e] && (this.keyCodeMap[e] = []), this.keyCodeMap[e];
    }
    _buildKeyCodeMapFromKeyMap() {
        let e = {};
        for (let [n, r] of Object.entries(this.keyMap)) {
            var t;
            (e[r] = null != (t = e[r]) ? t : []),
                e[r].push({
                    keyCode: r,
                    key: n,
                    code: this.findCodeFromKeyboardLayoutMap(n, !0)
                });
        }
        return e;
    }
    _initializeInternalLayoutMap() {
        let e = E();
        (this._internalKeyLayoutMap = new Map(Array.from(e.entries()))), this._setCachedKeyLayoutMapEntries();
    }
    _hasExactMatch(e) {
        let t = this.keyCodeMap[e.keyCode];
        return null != t && t.some((t) => t.key === e.key && t.code === e.code && t.keyCode === e.keyCode);
    }
    addEvent(e) {
        var t, n;
        let r = b(e);
        null == this._internalKeyLayoutMap && this._initializeInternalLayoutMap(), this._hasExactMatch(r) || ('dead' !== e.key.toLowerCase() && (null == this.keyMap[e.key] ? (this.keyMap[e.key] = e.keyCode) : this.keyMap[e.key] !== e.keyCode && d.error('KeyboardMapper - Key code mismatch for key '.concat(e.key, ': ').concat(this.keyMap[e.key], ' !== ').concat(e.keyCode)), (this.keyCodeMap[e.keyCode] = null != (n = this.keyCodeMap[e.keyCode]) ? n : []), this.keyCodeMap[e.keyCode].push(r), null == (t = this._internalKeyLayoutMap) || t.set(e.code, e.key), d.verbose('KeyboardMapper - Key added', { event: e }), this.updateCaches(), this.save()));
    }
    save() {
        a.K.set(_, this.keyMap);
    }
    updateCaches() {
        this._setCachedKeyCodeMapEntries(), this._setCachedKeyMapEntries(), this._setCachedKeyLayoutMapEntries();
    }
    reset() {
        (this._internalKeyLayoutMap = null), (this.keyMap = y(u({}, this._defaultKeyMap))), this._initializeInternalLayoutMap(), (this.keyCodeMap = this._buildKeyCodeMapFromKeyMap()), this.updateCaches(), this.save();
    }
    getLayoutMap() {
        return null == this._internalKeyLayoutMap ? E() : this._internalKeyLayoutMap;
    }
    getKeyCode(e) {
        return this.keyMap[e];
    }
    findCodeFromKeyboardLayoutMap(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = this.cachedKeyLayoutMapEntries;
        n && (r = Array.from(E().entries()));
        let i =
            null ==
            (t = r.find((t) => {
                let [n, r] = t;
                return r === e;
            }))
                ? void 0
                : t[0];
        return null != i ? i : e;
    }
    constructor(e = {}) {
        var t;
        c(this, 'keyCodeMap', void 0), c(this, 'keyMap', void 0), c(this, '_internalKeyLayoutMap', null), c(this, '_defaultKeyMap', void 0), c(this, '_cachedKeyCodeMapEntries', []), c(this, '_cachedKeyMapEntries', []), c(this, '_cachedKeyLayoutMapEntries', []), c(this, '_cachedAllEvents', []), (this._defaultKeyMap = e), (this.keyMap = null != (t = a.K.get(_)) ? t : e), (this.keyMap = y(u({}, this.keyMap))), this._initializeInternalLayoutMap(), (this.keyCodeMap = this._buildKeyCodeMapFromKeyMap()), this.updateCaches();
    }
}
class O extends v {
    getKeyString(e, t) {
        var n;
        let r = this.getKeyCodeMapItem(e);
        return (
            0 === r.length &&
                (r = this.cachedKeyMapEntries
                    .filter((e) => {
                        let [t, n] = e;
                        return n == n;
                    })
                    .map((e) => {
                        let [n, r] = e;
                        return {
                            key: n,
                            keyCode: r,
                            code: null != t ? t : this.findCodeFromKeyboardLayoutMap(n)
                        };
                    })),
            null ==
            (n = r.find((n) => {
                let r = n.keyCode === e;
                return null != t ? r && n.code === t : r;
            }))
                ? void 0
                : n.key
        );
    }
    findExactKeyboardEventMatch(e, t, n) {
        null == t && (t = this.findCodeFromKeyboardLayoutMap(e));
        let r = this.cachedAllEvents.filter((n) => {
            let r = n.key === e;
            return null != t ? r && n.code === t : r;
        });
        if (0 !== r.length)
            return r.find((r) => {
                let i = r.key === e && r.keyCode === n;
                return null != t ? i && r.code === t : i;
            });
    }
    findKeyboardEventByKey(e, t, n) {
        null == t && (t = this.findCodeFromKeyboardLayoutMap(e));
        let r = this.cachedAllEvents.filter((n) => {
            let r = n.key === e;
            return null != t ? r && n.code === t : r;
        });
        if (0 === r.length) return;
        let i = r.find((r) => {
            let i = r.key === e && r.keyCode === n;
            return null != t ? i && r.code === t : i;
        });
        return null != i ? i : r[0];
    }
    findKeyboardEventByKeyCode(e, t) {
        let n = this.getKeyString(e, t);
        if ((null == n && null != t && (n = this.getLayoutMap().get(t)), null == n)) {
            var r;
            n =
                null ==
                (r = this.getKeyCodeMapItem(e).find((n) => {
                    let r = n.keyCode === e;
                    return null != t ? r && n.code === t : r;
                }))
                    ? void 0
                    : r.key;
        }
        return null == n ? this.getDefaultKeyboardEventShape(void 0, e, t) : this.findKeyboardEventByKey(n, t, e);
    }
    getDefaultKeyboardEventShape(e, t, n) {
        let r = null == e ? void 0 : e.toLocaleUpperCase();
        if (null != r) {
            let e = this.keyMap[r];
            if (null == e) return;
            return b({
                keyCode: e,
                key: r,
                code: null != n ? n : this.findCodeFromKeyboardLayoutMap(r)
            });
        }
        if (null != t) {
            var i;
            let e =
                null ==
                (i = this.cachedKeyMapEntries.find((e) => {
                    let [t, n] = e;
                    return n == n;
                }))
                    ? void 0
                    : i[0];
            if (null == e) return;
            return b({
                keyCode: t,
                key: e,
                code: null != n ? n : this.findCodeFromKeyboardLayoutMap(e)
            });
        }
    }
}
let I = null,
    S = null;
function T() {
    return null != S
        ? S
        : (S = new Promise(async (e) => {
              await g(),
                  (I = new O(f)),
                  document.addEventListener('keydown', (e) => {
                      try {
                          null == I || I.addEvent(e);
                      } catch (t) {
                          d.error('KeyboardMapper - Error adding event', {
                              event: e,
                              error: t
                          });
                      }
                  }),
                  e();
          }));
}
function N() {
    return null == I ? (T(), null) : I;
}
async function A() {
    var e;
    await g(), null == (e = N()) || e.reset();
}
function C() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return n ? E() : null != (t = null == (e = N()) ? void 0 : e.getLayoutMap()) ? t : E();
}
function R(e) {
    var t, n;
    let r = e.toLocaleUpperCase();
    return null != (n = null == (t = N()) ? void 0 : t.findCodeFromKeyboardLayoutMap(r)) ? n : void 0;
}
function P(e) {
    let t = b(e);
    if (null != t.key) {
        var n, r;
        return null != (r = null == (n = N()) ? void 0 : n.findExactKeyboardEventMatch(t.key, t.code, t.keyCode)) ? r : null;
    }
    return null;
}
function w(e) {
    var t, n, r, i;
    let o = e.toLocaleUpperCase(),
        a = R(o),
        s = null != (n = null == (t = N()) ? void 0 : t.findKeyboardEventByKey(o, a)) ? n : null;
    if (null != s) return s;
    try {
        let e = null != (i = null == (r = N()) ? void 0 : r.getDefaultKeyboardEventShape(o, void 0, a)) ? i : null;
        if (null == e) return null;
        let t = new KeyboardEvent('keydown', e);
        return b({
            keyCode: t.keyCode,
            key: t.key,
            code: t.code
        });
    } catch (e) {
        return null;
    }
}
function D(e) {
    var t, n, r, i;
    let o = null != (n = null == (t = N()) ? void 0 : t.findKeyboardEventByKeyCode(e)) ? n : null;
    if (null != o) return o;
    try {
        let t = null != (i = null == (r = N()) ? void 0 : r.getDefaultKeyboardEventShape(void 0, e)) ? i : null;
        if (null == t) return null;
        let n = new KeyboardEvent('keydown', t);
        return b({
            keyCode: n.keyCode,
            key: n.key,
            code: n.code
        });
    } catch (e) {
        return null;
    }
}
