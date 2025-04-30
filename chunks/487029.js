n.d(t, { Z: () => N }), n(388685), n(642613), n(539854);
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
    f = n(208049),
    p = n(763296),
    g = n(242291),
    y = n(174470),
    O = n(549771),
    b = n(964398),
    v = n(294206),
    m = n(710111),
    x = n(840558);
function N(e) {
    let { guildId: t, channel: n, width: N, height: C, keepOpen: E, interactive: j = !0, analyticsSource: I, onClose: P } = e,
        S = (function (e) {
            let [t, n] = (0, o.Wu)([p.Z], () => [p.Z.getSounds(), p.Z.getFavorites()]);
            return l.useMemo(() => {
                let r = [],
                    l = [...e, m.X8],
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
        Z = l.useRef(null),
        [_, w] = l.useState(void 0),
        A = (0, o.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: R } = (0, s.ZP)(a.Z.SOUNDBOARD_WHEEL),
        D = l.useCallback(
            (e) => {
                (0, g.GN)(e, n.id, R), P();
            },
            [R, n.id, P]
        );
    l.useEffect(() => {
        f.w(), c.DZ.loadIfNecessary();
    }, []),
        l.useEffect(() => {
            0 === S.length && 0 === T.length && P();
        }, [S.length, T, P]),
        l.useEffect(
            () => () => {
                let e = Z.current;
                E || null == e || D(e);
            },
            [E, D]
        ),
        (0, u.Z)(
            {
                type: i.ImpressionTypes.POPOUT,
                name: i.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: I,
                    guild_id: t,
                    media_session_id: A
                }
            },
            { disableTrack: !j }
        );
    let k = l.useCallback((e) => {
            (Z.current = e), w(null == e ? void 0 : e.soundId);
        }, []),
        M = l.useCallback(
            (e) => {
                if (null == e) return void k(null);
                let t = S[e];
                null != t && k(t);
            },
            [k, S]
        ),
        U = l.useCallback(
            (e) => {
                if (null == e) return;
                let t = S[e];
                null != t && D(t);
            },
            [S, D]
        ),
        L = l.useMemo(
            () =>
                S.map((e) =>
                    (0, r.jsx)(
                        v.ZP,
                        {
                            interactive: j,
                            className: x.soundButton,
                            sound: e,
                            focused: _ === e.soundId,
                            channel: n
                        },
                        e.soundId
                    )
                ),
            [_, n, j, S]
        );
    return 0 === S.length
        ? null
        : (0, r.jsx)(s.Gt, {
              value: R,
              children: (0, r.jsx)(b.Z, {
                  wheelWidth: N,
                  wheelHeight: C,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !E,
                  activeItem: _,
                  onItemSelect: M,
                  onItemAction: U,
                  onClose: P,
                  interactive: j,
                  children: L
              })
          });
}
