n.d(t, { Z: () => N }), n(388685), n(642613), n(539854);
var l = n(200651),
    r = n(192379),
    i = n(990547),
    a = n(442837),
    o = n(100527),
    s = n(906732),
    u = n(213609),
    c = n(675478),
    d = n(19780),
    f = n(709054),
    h = n(208049),
    g = n(763296),
    p = n(242291),
    y = n(174470),
    O = n(549771),
    m = n(964398),
    v = n(294206),
    E = n(710111),
    b = n(840558);
function N(e) {
    let { guildId: t, channel: n, width: N, height: C, keepOpen: x, interactive: I = !0, analyticsSource: S, onClose: T } = e,
        P = (function (e) {
            let [t, n] = (0, a.Wu)([g.Z], () => [g.Z.getSounds(), g.Z.getFavorites()]);
            return r.useMemo(() => {
                let l = [],
                    r = [...e, E.X8],
                    i = (e, r) => {
                        var i, a;
                        for (let o of null != (a = null == (i = t.get(e)) ? void 0 : i.sort((e, t) => f.default.compare(e.soundId, t.soundId))) ? a : []) {
                            let e = n.has(o.soundId);
                            ((e && r) || (!e && !r)) && o.available && l.push(o);
                        }
                    };
                return r.forEach((e) => i(e, !0)), r.forEach((e) => i(e, !1)), l;
            }, [t, n, e]);
        })((0, O.h)(n, !0)),
        _ = (0, y.j)(),
        Z = r.useRef(null),
        [j, A] = r.useState(void 0),
        w = (0, a.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: R } = (0, s.ZP)(o.Z.SOUNDBOARD_WHEEL),
        D = r.useCallback(
            (e) => {
                (0, p.GN)(e, n.id, R), T();
            },
            [R, n.id, T]
        );
    r.useEffect(() => {
        h.w(), c.DZ.loadIfNecessary();
    }, []),
        r.useEffect(() => {
            0 === P.length && 0 === _.length && T();
        }, [P.length, _, T]),
        r.useEffect(
            () => () => {
                let e = Z.current;
                x || null == e || D(e);
            },
            [x, D]
        ),
        (0, u.Z)(
            {
                type: i.ImpressionTypes.POPOUT,
                name: i.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: S,
                    guild_id: t,
                    media_session_id: w
                }
            },
            { disableTrack: !I }
        );
    let M = r.useCallback((e) => {
            (Z.current = e), A(null == e ? void 0 : e.soundId);
        }, []),
        k = r.useCallback(
            (e) => {
                if (null == e) return void M(null);
                let t = P[e];
                null != t && M(t);
            },
            [M, P]
        ),
        U = r.useCallback(
            (e) => {
                if (null == e) return;
                let t = P[e];
                null != t && D(t);
            },
            [P, D]
        ),
        L = r.useMemo(
            () =>
                P.map((e) =>
                    (0, l.jsx)(
                        v.ZP,
                        {
                            interactive: I,
                            className: b.soundButton,
                            sound: e,
                            focused: j === e.soundId,
                            channel: n
                        },
                        e.soundId
                    )
                ),
            [j, n, I, P]
        );
    return 0 === P.length
        ? null
        : (0, l.jsx)(s.Gt, {
              value: R,
              children: (0, l.jsx)(m.Z, {
                  wheelWidth: N,
                  wheelHeight: C,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !x,
                  activeItem: j,
                  onItemSelect: k,
                  onItemAction: U,
                  onClose: T,
                  interactive: I,
                  children: L
              })
          });
}
