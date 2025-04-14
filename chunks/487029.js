n.d(t, { Z: () => m }), n(388685), n(642613), n(539854);
var r = n(200651),
    l = n(192379),
    i = n(990547),
    o = n(442837),
    a = n(100527),
    s = n(906732),
    c = n(213609),
    u = n(675478),
    d = n(19780),
    h = n(709054),
    f = n(208049),
    p = n(763296),
    g = n(242291),
    N = n(174470),
    y = n(549771),
    O = n(964398),
    b = n(294206),
    v = n(710111),
    x = n(840558);
function m(e) {
    let { guildId: t, channel: n, width: m, height: E, keepOpen: C, interactive: j = !0, analyticsSource: I, onClose: S } = e,
        P = (function (e) {
            let [t, n] = (0, o.Wu)([p.Z], () => [p.Z.getSounds(), p.Z.getFavorites()]);
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
        })((0, y.h)(n, !0)),
        T = (0, N.j)(),
        w = l.useRef(null),
        [Z, _] = l.useState(void 0),
        R = (0, o.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: A } = (0, s.ZP)(a.Z.SOUNDBOARD_WHEEL),
        D = l.useCallback(
            (e) => {
                (0, g.GN)(e, n.id, A), S();
            },
            [A, n.id, S]
        );
    l.useEffect(() => {
        f.w(), u.DZ.loadIfNecessary();
    }, []),
        l.useEffect(() => {
            0 === P.length && 0 === T.length && S();
        }, [P.length, T, S]),
        l.useEffect(
            () => () => {
                let e = w.current;
                C || null == e || D(e);
            },
            [C, D]
        ),
        (0, c.Z)(
            {
                type: i.ImpressionTypes.POPOUT,
                name: i.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: I,
                    guild_id: t,
                    media_session_id: R
                }
            },
            { disableTrack: !j }
        );
    let W = l.useCallback((e) => {
            (w.current = e), _(null == e ? void 0 : e.soundId);
        }, []),
        k = l.useCallback(
            (e) => {
                if (null == e) return void W(null);
                let t = P[e];
                null != t && W(t);
            },
            [W, P]
        ),
        B = l.useCallback(
            (e) => {
                if (null == e) return;
                let t = P[e];
                null != t && D(t);
            },
            [P, D]
        ),
        M = l.useMemo(
            () =>
                P.map((e) =>
                    (0, r.jsx)(
                        b.ZP,
                        {
                            interactive: j,
                            className: x.soundButton,
                            sound: e,
                            focused: Z === e.soundId,
                            channel: n
                        },
                        e.soundId
                    )
                ),
            [Z, n, j, P]
        );
    return 0 === P.length
        ? null
        : (0, r.jsx)(s.Gt, {
              value: A,
              children: (0, r.jsx)(O.Z, {
                  wheelWidth: m,
                  wheelHeight: E,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !C,
                  activeItem: Z,
                  onItemSelect: k,
                  onItemAction: B,
                  onClose: S,
                  interactive: j,
                  children: M
              })
          });
}
