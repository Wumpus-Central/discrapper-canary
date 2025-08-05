(n.d(t, { Z: () => m }), n(388685), n(642613), n(539854));
var r = n(255367),
    l = n(73800),
    i = n(990547),
    s = n(442837),
    a = n(100527),
    o = n(906732),
    c = n(213609),
    u = n(675478),
    d = n(19780),
    h = n(709054),
    f = n(208049),
    g = n(763296),
    p = n(242291),
    N = n(174470),
    O = n(549771),
    x = n(964398),
    y = n(294206),
    b = n(710111),
    E = n(840558);
function m(e) {
    let { guildId: t, channel: n, width: m, height: C, keepOpen: T, interactive: I = !0, analyticsSource: v, onClose: j } = e,
        _ = (function (e) {
            let [t, n] = (0, s.Wu)([g.Z], () => [g.Z.getSounds(), g.Z.getFavorites()]);
            return l.useMemo(() => {
                let r = [],
                    l = [...e, b.X8],
                    i = (e, l) => {
                        var i, s;
                        for (let a of null != (s = null == (i = t.get(e)) ? void 0 : i.sort((e, t) => h.default.compare(e.soundId, t.soundId))) ? s : []) {
                            let e = n.has(a.soundId);
                            ((e && l) || (!e && !l)) && a.available && r.push(a);
                        }
                    };
                return (l.forEach((e) => i(e, !0)), l.forEach((e) => i(e, !1)), r);
            }, [t, n, e]);
        })((0, O.h)(n, !0)),
        S = (0, N.j)(),
        P = l.useRef(null),
        [A, R] = l.useState(void 0),
        w = (0, s.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: D } = (0, o.ZP)(a.Z.SOUNDBOARD_WHEEL),
        Z = l.useCallback(
            (e) => {
                ((0, p.GN)(e, n.id, D), j());
            },
            [D, n.id, j]
        );
    (l.useEffect(() => {
        (f.w(), u.DZ.loadIfNecessary());
    }, []),
        l.useEffect(() => {
            0 === _.length && 0 === S.length && j();
        }, [_.length, S, j]),
        l.useEffect(
            () => () => {
                let e = P.current;
                T || null == e || Z(e);
            },
            [T, Z]
        ),
        (0, c.Z)(
            {
                type: i.ImpressionTypes.POPOUT,
                name: i.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: v,
                    guild_id: t,
                    media_session_id: w
                }
            },
            { disableTrack: !I }
        ));
    let k = l.useCallback((e) => {
            ((P.current = e), R(null == e ? void 0 : e.soundId));
        }, []),
        M = l.useCallback(
            (e) => {
                if (null == e) return void k(null);
                let t = _[e];
                null != t && k(t);
            },
            [k, _]
        ),
        U = l.useCallback(
            (e) => {
                if (null == e) return;
                let t = _[e];
                null != t && Z(t);
            },
            [_, Z]
        ),
        B = l.useMemo(
            () =>
                _.map((e) =>
                    (0, r.jsx)(
                        y.ZP,
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
            [A, n, I, _]
        );
    return 0 === _.length
        ? null
        : (0, r.jsx)(o.Gt, {
              value: D,
              children: (0, r.jsx)(x.Z, {
                  wheelWidth: m,
                  wheelHeight: C,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !T,
                  activeItem: A,
                  onItemSelect: M,
                  onItemAction: U,
                  onClose: j,
                  interactive: I,
                  children: B
              })
          });
}
