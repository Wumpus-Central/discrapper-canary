n.d(t, {
    Z: () => g,
    m: () => E
}),
    n(388685),
    n(539854),
    n(781311);
var r = n(192379),
    i = n(954955),
    a = n.n(i),
    o = n(442837),
    s = n(285651),
    l = n(268350),
    c = n(453070),
    u = n(926491),
    d = n(594174),
    f = n(483360),
    _ = n(251625),
    p = n(606301),
    h = n(549058);
let m = (0, _.ad)(l.$p, h.J7),
    g = (e, t, n) => {
        let i = (0, c.fQ)(n),
            a = (0, o.e7)([d.default], () => d.default.getCurrentUser());
        return r.useMemo(() => {
            let r = (0, p.wN)(e);
            if (t || null == e || '' === e || r.length > h.t7 || !i) return [];
            let o = [],
                l = [],
                c = (0, p.kT)(e),
                u = c === r[0] ? r : [c, ...r];
            f.ZP.queryStickers(u, !1).forEach((e) => {
                let { sticker: t } = e,
                    r = (0, s.cO)(t, a, n),
                    i = {
                        sticker: t,
                        sendability: r
                    };
                r === s.eb.SENDABLE ? o.push(i) : r === s.eb.SENDABLE_WITH_PREMIUM && l.push(i);
            });
            let d = [];
            return o.length > 0 && ((d = o.slice(0, h.qm)), 0 !== l.length && (d.length === h.qm && d.pop(), d.push(l[0]))), d;
        }, [e, n, i, t, a]);
    },
    E = (e) => {
        let { setTextInputValue: t, setHasDismissed: n, setHasSelection: i, setFocusedSuggestionType: o, delayBeforeSuggestions: s } = e,
            l = r.useRef(null),
            c = r.useRef(!1),
            d = r.useRef(!1),
            f = r.useMemo(() => a()(t, null != s ? s : h.gf), [t, s]);
        return {
            handleTextChange: async (e) => {
                var r;
                if (null == e || '' === e) f.cancel(), null == t || t(''), null == n || n(!1), null == i || i(!1), null == o || o(null), (l.current = null), (c.current = !1);
                else if (!c.current && e.trim() !== (null == (r = l.current) ? void 0 : r.trim())) {
                    if (((l.current = e), (0, p.wN)(e).length > h.t7)) {
                        (c.current = !0), f.cancel(), t('');
                        return;
                    }
                    if (!0 === d.current) return;
                    u.Z.hasLoadedStickerPacks || ((d.current = !0), await m(), (d.current = !1)), f(l.current);
                }
            },
            debouncedSetTextInputValue: f
        };
    };
