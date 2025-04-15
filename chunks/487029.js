n.d(t, { Z: () => x }), n(388685), n(642613), n(539854);
var r = n(200651),
    l = n(192379),
    i = n(990547),
    o = n(442837),
    a = n(100527),
    s = n(906732),
    u = n(213609),
    c = n(675478),
    d = n(19780),
    h = n(709054),
    p = n(208049),
    f = n(763296),
    g = n(242291),
    y = n(174470),
    O = n(549771),
    N = n(964398),
    b = n(294206),
    v = n(710111),
    m = n(840558);
function x(e) {
    let { guildId: t, channel: n, width: x, height: E, keepOpen: C, interactive: I = !0, analyticsSource: j, onClose: P } = e,
        S = (function (e) {
            let [t, n] = (0, o.Wu)([f.Z], () => [f.Z.getSounds(), f.Z.getFavorites()]);
            return l.useMemo(() => {
                let r = [],
                    l = [...e, v.X8],
                    i = (e, l) => {
                        var i, o;
                        for (let a of null != (o = null == (i = t.get(e)) ? void 0 : i.sort((e, t) => h.default.compare(e.soundId, t.soundId))) ? o : []) {
                            let e = n.has(a.soundId);
                            ((e && l) || (!e && !l)) && a.available && r.push(a);
                        }
                    };
                return l.forEach((e) => i(e, !0)), l.forEach((e) => i(e, !1)), r;
            }, [t, n, e]);
        })((0, O.h)(n, !0)),
        T = (0, y.j)(),
        w = l.useRef(null),
        [Z, _] = l.useState(void 0),
        A = (0, o.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: R } = (0, s.ZP)(a.Z.SOUNDBOARD_WHEEL),
        D = l.useCallback(
            (e) => {
                (0, g.GN)(e, n.id, R), P();
            },
            [R, n.id, P]
        );
    l.useEffect(() => {
        p.w(), c.DZ.loadIfNecessary();
    }, []),
        l.useEffect(() => {
            0 === S.length && 0 === T.length && P();
        }, [S.length, T, P]),
        l.useEffect(
            () => () => {
                let e = w.current;
                C || null == e || D(e);
            },
            [C, D]
        ),
        (0, u.Z)(
            {
                type: i.ImpressionTypes.POPOUT,
                name: i.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: j,
                    guild_id: t,
                    media_session_id: A
                }
            },
            { disableTrack: !I }
        );
    let W = l.useCallback((e) => {
            (w.current = e), _(null == e ? void 0 : e.soundId);
        }, []),
        k = l.useCallback(
            (e) => {
                if (null == e) return void W(null);
                let t = S[e];
                null != t && W(t);
            },
            [W, S]
        ),
        M = l.useCallback(
            (e) => {
                if (null == e) return;
                let t = S[e];
                null != t && D(t);
            },
            [S, D]
        ),
        U = l.useMemo(
            () =>
                S.map((e) =>
                    (0, r.jsx)(
                        b.ZP,
                        {
                            interactive: I,
                            className: m.soundButton,
                            sound: e,
                            focused: Z === e.soundId,
                            channel: n
                        },
                        e.soundId
                    )
                ),
            [Z, n, I, S]
        );
    return 0 === S.length
        ? null
        : (0, r.jsx)(s.Gt, {
              value: R,
              children: (0, r.jsx)(N.Z, {
                  wheelWidth: x,
                  wheelHeight: E,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !C,
                  activeItem: Z,
                  onItemSelect: k,
                  onItemAction: M,
                  onClose: P,
                  interactive: I,
                  children: U
              })
          });
}
