r.d(n, {
    Z: function () {
        return y;
    },
    m: function () {
        return b;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(192379),
    s = r(954955),
    l = r.n(s),
    u = r(442837),
    c = r(285651),
    d = r(268350),
    f = r(453070),
    p = r(926491),
    h = r(594174),
    _ = r(483360),
    m = r(251625),
    g = r(606301),
    E = r(549058);
let v = (0, m.ad)(d.$p, E.J7),
    y = (e, n, r) => {
        let i = (0, f.fQ)(r),
            a = (0, u.e7)([h.default], () => h.default.getCurrentUser());
        return o.useMemo(() => {
            let o = (0, g.wN)(e);
            if (n || null == e || '' === e || o.length > E.t7 || !i) return [];
            let s = [],
                l = [],
                u = (0, g.kT)(e),
                d = u === o[0] ? o : [u, ...o];
            _.ZP.queryStickers(d, !1).forEach((e) => {
                let { sticker: n } = e,
                    i = (0, c.cO)(n, a, r),
                    o = {
                        sticker: n,
                        sendability: i
                    };
                i === c.eb.SENDABLE ? s.push(o) : i === c.eb.SENDABLE_WITH_PREMIUM && l.push(o);
            });
            let f = [];
            return s.length > 0 && ((f = s.slice(0, E.qm)), 0 !== l.length && (f.length === E.qm && f.pop(), f.push(l[0]))), f;
        }, [e, r, i, n, a]);
    },
    b = (e) => {
        let { setTextInputValue: n, setHasDismissed: r, setHasSelection: i, setFocusedSuggestionType: a, delayBeforeSuggestions: s } = e,
            u = o.useRef(null),
            c = o.useRef(!1),
            d = o.useRef(!1),
            f = o.useMemo(() => l()(n, null != s ? s : E.gf), [n, s]);
        return {
            handleTextChange: async (e) => {
                var o;
                if (null == e || '' === e) f.cancel(), null == n || n(''), null == r || r(!1), null == i || i(!1), null == a || a(null), (u.current = null), (c.current = !1);
                else if (!c.current && e.trim() !== (null === (o = u.current) || void 0 === o ? void 0 : o.trim())) {
                    if (((u.current = e), (0, g.wN)(e).length > E.t7)) {
                        (c.current = !0), f.cancel(), n('');
                        return;
                    }
                    if (!0 === d.current) return;
                    !p.Z.hasLoadedStickerPacks && ((d.current = !0), await v(), (d.current = !1)), f(u.current);
                }
            },
            debouncedSetTextInputValue: f
        };
    };
