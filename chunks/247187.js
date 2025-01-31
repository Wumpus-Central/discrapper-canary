n = { value: !0 };
for (
    var n,
        i = 'undefined' != typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform),
        r = {
            alt: 'altKey',
            control: 'ctrlKey',
            meta: 'metaKey',
            shift: 'shiftKey'
        },
        a = {
            add: '+',
            break: 'pause',
            cmd: 'meta',
            command: 'meta',
            ctl: 'control',
            ctrl: 'control',
            del: 'delete',
            down: 'arrowdown',
            esc: 'escape',
            ins: 'insert',
            left: 'arrowleft',
            mod: i ? 'meta' : 'control',
            opt: 'alt',
            option: 'alt',
            return: 'enter',
            right: 'arrowright',
            space: ' ',
            spacebar: ' ',
            up: 'arrowup',
            win: 'meta',
            windows: 'meta'
        },
        s = {
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            control: 17,
            alt: 18,
            pause: 19,
            capslock: 20,
            escape: 27,
            ' ': 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36,
            arrowleft: 37,
            arrowup: 38,
            arrowright: 39,
            arrowdown: 40,
            insert: 45,
            delete: 46,
            meta: 91,
            numlock: 144,
            scrolllock: 145,
            ';': 186,
            '=': 187,
            ',': 188,
            '-': 189,
            '.': 190,
            '/': 191,
            '`': 192,
            '[': 219,
            '\\': 220,
            ']': 221,
            "'": 222
        },
        o = 1;
    o < 20;
    o++
)
    s['f' + o] = 111 + o;
function l(e, t, n) {
    !t || 'byKey' in t || ((n = t), (t = null)), Array.isArray(e) || (e = [e]);
    var i = e.map(function (e) {
            return d(e, t);
        }),
        r = function (e) {
            return i.some(function (t) {
                return f(t, e);
            });
        };
    return null == n ? r : r(n);
}
function u(e, t) {
    return l(e, t);
}
function c(e, t) {
    return l(e, { byKey: !0 }, t);
}
function d(e, t) {
    var n = t && t.byKey,
        i = {},
        a = (e = e.replace('++', '+add')).split('+'),
        s = a.length;
    for (var o in r) i[r[o]] = !1;
    var l = !0,
        u = !1,
        c = void 0;
    try {
        for (var d, f = a[Symbol.iterator](); !(l = (d = f.next()).done); l = !0) {
            var h = d.value,
                m = h.endsWith('?') && h.length > 1;
            m && (h = h.slice(0, -1));
            var g = p(h),
                E = r[g];
            (1 !== s && E) || (n ? (i.key = g) : (i.which = _(h))), E && (i[E] = !m || null);
        }
    } catch (e) {
        (u = !0), (c = e);
    } finally {
        try {
            !l && f.return && f.return();
        } finally {
            if (u) throw c;
        }
    }
    return i;
}
function f(e, t) {
    for (var n in e) {
        var i = e[n],
            r = void 0;
        if (null != i && (null != (r = 'key' === n && null != t.key ? t.key.toLowerCase() : 'which' === n ? (91 === i && 93 === t.which ? 91 : t.which) : t[n]) || !1 !== i) && r !== i) return !1;
    }
    return !0;
}
function _(e) {
    return s[(e = p(e))] || e.toUpperCase().charCodeAt(0);
}
function p(e) {
    return (e = a[(e = e.toLowerCase())] || e);
}
(n = l), (n = l), (n = u), (t.isKeyHotkey = c);
