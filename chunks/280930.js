n.d(t, {
    Z: () => g,
    m: () => E
}),
    n(47120),
    n(653041);
var i = n(192379),
    r = n(954955),
    a = n.n(r),
    s = n(442837),
    o = n(285651),
    l = n(268350),
    u = n(453070),
    c = n(926491),
    d = n(594174),
    f = n(483360),
    _ = n(251625),
    p = n(606301),
    h = n(549058);
let m = (0, _.ad)(l.$p, h.J7),
    g = (e, t, n) => {
        let r = (0, u.fQ)(n),
            a = (0, s.e7)([d.default], () => d.default.getCurrentUser());
        return i.useMemo(() => {
            let i = (0, p.wN)(e);
            if (t || null == e || '' === e || i.length > h.t7 || !r) return [];
            let s = [],
                l = [],
                u = (0, p.kT)(e),
                c = u === i[0] ? i : [u, ...i];
            f.ZP.queryStickers(c, !1).forEach((e) => {
                let { sticker: t } = e,
                    i = (0, o.cO)(t, a, n),
                    r = {
                        sticker: t,
                        sendability: i
                    };
                i === o.eb.SENDABLE ? s.push(r) : i === o.eb.SENDABLE_WITH_PREMIUM && l.push(r);
            });
            let d = [];
            return s.length > 0 && ((d = s.slice(0, h.qm)), 0 !== l.length && (d.length === h.qm && d.pop(), d.push(l[0]))), d;
        }, [e, n, r, t, a]);
    },
    E = (e) => {
        let { setTextInputValue: t, setHasDismissed: n, setHasSelection: r, setFocusedSuggestionType: s, delayBeforeSuggestions: o } = e,
            l = i.useRef(null),
            u = i.useRef(!1),
            d = i.useRef(!1),
            f = i.useMemo(() => a()(t, null != o ? o : h.gf), [t, o]);
        return {
            handleTextChange: async (e) => {
                var i;
                if (null == e || '' === e) f.cancel(), null == t || t(''), null == n || n(!1), null == r || r(!1), null == s || s(null), (l.current = null), (u.current = !1);
                else if (!u.current && e.trim() !== (null === (i = l.current) || void 0 === i ? void 0 : i.trim())) {
                    if (((l.current = e), (0, p.wN)(e).length > h.t7)) {
                        (u.current = !0), f.cancel(), t('');
                        return;
                    }
                    if (!0 === d.current) return;
                    c.Z.hasLoadedStickerPacks || ((d.current = !0), await m(), (d.current = !1)), f(l.current);
                }
            },
            debouncedSetTextInputValue: f
        };
    };
