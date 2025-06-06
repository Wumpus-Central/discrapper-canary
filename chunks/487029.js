n.d(t, { Z: () => E }), n(388685), n(642613), n(539854);
var r = n(255367),
    l = n(73800),
    i = n(990547),
    o = n(442837),
    a = n(100527),
    s = n(906732),
    u = n(213609),
    c = n(675478),
    d = n(19780),
    f = n(709054),
    h = n(208049),
    p = n(763296),
    g = n(242291),
    O = n(174470),
    y = n(549771),
    N = n(964398),
    b = n(294206),
    v = n(710111),
    m = n(840558);
function E(e) {
    let { guildId: t, channel: n, width: E, height: C, keepOpen: x, interactive: I = !0, analyticsSource: T, onClose: P } = e,
        S = (function (e) {
            let [t, n] = (0, o.Wu)([p.Z], () => [p.Z.getSounds(), p.Z.getFavorites()]);
            return l.useMemo(() => {
                let r = [],
                    l = [...e, v.X8],
                    i = (e, l) => {
                        var i, o;
                        for (let a of null != (o = null == (i = t.get(e)) ? void 0 : i.sort((e, t) => f.default.compare(e.soundId, t.soundId))) ? o : []) {
                            let e = n.has(a.soundId);
                            ((e && l) || (!e && !l)) && a.available && r.push(a);
                        }
                    };
                return l.forEach((e) => i(e, !0)), l.forEach((e) => i(e, !1)), r;
            }, [t, n, e]);
        })((0, y.h)(n, !0)),
        j = (0, O.j)(),
        Z = l.useRef(null),
        [A, _] = l.useState(void 0),
        w = (0, o.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: R } = (0, s.ZP)(a.Z.SOUNDBOARD_WHEEL),
        D = l.useCallback(
            (e) => {
                (0, g.GN)(e, n.id, R), P();
            },
            [R, n.id, P]
        );
    l.useEffect(() => {
        h.w(), c.DZ.loadIfNecessary();
    }, []),
        l.useEffect(() => {
            0 === S.length && 0 === j.length && P();
        }, [S.length, j, P]),
        l.useEffect(
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
                    source: T,
                    guild_id: t,
                    media_session_id: w
                }
            },
            { disableTrack: !I }
        );
    let U = l.useCallback((e) => {
            (Z.current = e), _(null == e ? void 0 : e.soundId);
        }, []),
        L = l.useCallback(
            (e) => {
                if (null == e) return void U(null);
                let t = S[e];
                null != t && U(t);
            },
            [U, S]
        ),
        M = l.useCallback(
            (e) => {
                if (null == e) return;
                let t = S[e];
                null != t && D(t);
            },
            [S, D]
        ),
        k = l.useMemo(
            () =>
                S.map((e) =>
                    (0, r.jsx)(
                        b.ZP,
                        {
                            interactive: I,
                            className: m.soundButton,
                            sound: e,
                            focused: A === e.soundId,
                            channel: n
                        },
                        e.soundId
                    )
                ),
            [A, n, I, S]
        );
    return 0 === S.length
        ? null
        : (0, r.jsx)(s.Gt, {
              value: R,
              children: (0, r.jsx)(N.Z, {
                  wheelWidth: E,
                  wheelHeight: C,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !x,
                  activeItem: A,
                  onItemSelect: L,
                  onItemAction: M,
                  onClose: P,
                  interactive: I,
                  children: k
              })
          });
}
