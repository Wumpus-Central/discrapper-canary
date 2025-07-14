(n.d(t, { Z: () => m }), n(388685), n(642613), n(539854));
var r = n(255367),
    l = n(73800),
    i = n(990547),
    o = n(442837),
    s = n(100527),
    a = n(906732),
    c = n(213609),
    u = n(675478),
    d = n(19780),
    h = n(709054),
    f = n(208049),
    p = n(763296),
    g = n(242291),
    O = n(174470),
    N = n(549771),
    y = n(964398),
    b = n(294206),
    x = n(710111),
    E = n(840558);
function m(e) {
    let { guildId: t, channel: n, width: m, height: v, keepOpen: C, interactive: I = !0, analyticsSource: T, onClose: j } = e,
        S = (function (e) {
            let [t, n] = (0, o.Wu)([p.Z], () => [p.Z.getSounds(), p.Z.getFavorites()]);
            return l.useMemo(() => {
                let r = [],
                    l = [...e, x.X8],
                    i = (e, l) => {
                        var i, o;
                        for (let s of null != (o = null == (i = t.get(e)) ? void 0 : i.sort((e, t) => h.default.compare(e.soundId, t.soundId))) ? o : []) {
                            let e = n.has(s.soundId);
                            ((e && l) || (!e && !l)) && s.available && r.push(s);
                        }
                    };
                return (l.forEach((e) => i(e, !0)), l.forEach((e) => i(e, !1)), r);
            }, [t, n, e]);
        })((0, N.h)(n, !0)),
        P = (0, O.j)(),
        _ = l.useRef(null),
        [A, R] = l.useState(void 0),
        w = (0, o.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: Z } = (0, a.ZP)(s.Z.SOUNDBOARD_WHEEL),
        D = l.useCallback(
            (e) => {
                ((0, g.GN)(e, n.id, Z), j());
            },
            [Z, n.id, j]
        );
    (l.useEffect(() => {
        (f.w(), u.DZ.loadIfNecessary());
    }, []),
        l.useEffect(() => {
            0 === S.length && 0 === P.length && j();
        }, [S.length, P, j]),
        l.useEffect(
            () => () => {
                let e = _.current;
                C || null == e || D(e);
            },
            [C, D]
        ),
        (0, c.Z)(
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
        ));
    let k = l.useCallback((e) => {
            ((_.current = e), R(null == e ? void 0 : e.soundId));
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
                        b.ZP,
                        {
                            interactive: I,
                            className: E.soundButton,
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
        : (0, r.jsx)(a.Gt, {
              value: Z,
              children: (0, r.jsx)(y.Z, {
                  wheelWidth: m,
                  wheelHeight: v,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !C,
                  activeItem: A,
                  onItemSelect: M,
                  onItemAction: U,
                  onClose: j,
                  interactive: I,
                  children: L
              })
          });
}
