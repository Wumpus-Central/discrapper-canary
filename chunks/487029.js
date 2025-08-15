n.d(t, { Z: () => m }), n(388685), n(642613), n(539854);
var r = n(951288),
    l = n(647438),
    i = n(990547),
    o = n(442837),
    s = n(100527),
    a = n(906732),
    c = n(213609),
    u = n(675478),
    d = n(19780),
    f = n(709054),
    h = n(208049),
    g = n(763296),
    p = n(242291),
    O = n(174470),
    y = n(549771),
    N = n(964398),
    b = n(294206),
    x = n(710111),
    E = n(649093);
function m(e) {
    let {
            guildId: t,
            channel: n,
            width: m,
            height: C,
            keepOpen: v,
            interactive: T = !0,
            analyticsSource: j,
            onClose: I,
        } = e,
        S = (function (e) {
            let [t, n] = (0, o.Wu)([g.Z], () => [g.Z.getSounds(), g.Z.getFavorites()]);
            return l.useMemo(() => {
                let r = [],
                    l = [...e, x.X8],
                    i = (e, l) => {
                        var i, o;
                        for (let s of null !=
                        (o =
                            null == (i = t.get(e)) ? void 0 : i.sort((e, t) => f.default.compare(e.soundId, t.soundId)))
                            ? o
                            : []) {
                            let e = n.has(s.soundId);
                            ((e && l) || (!e && !l)) && s.available && r.push(s);
                        }
                    };
                return l.forEach((e) => i(e, !0)), l.forEach((e) => i(e, !1)), r;
            }, [t, n, e]);
        })((0, y.h)(n, !0)),
        _ = (0, O.j)(),
        P = l.useRef(null),
        [A, R] = l.useState(void 0),
        w = (0, o.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: D } = (0, a.ZP)(s.Z.SOUNDBOARD_WHEEL),
        Z = l.useCallback(
            (e) => {
                (0, p.GN)(e, n.id, D), I();
            },
            [D, n.id, I],
        );
    l.useEffect(() => {
        h.w(), u.DZ.loadIfNecessary();
    }, []),
        l.useEffect(() => {
            0 === S.length && 0 === _.length && I();
        }, [S.length, _, I]),
        l.useEffect(
            () => () => {
                let e = P.current;
                v || null == e || Z(e);
            },
            [v, Z],
        ),
        (0, c.Z)(
            {
                type: i.ImpressionTypes.POPOUT,
                name: i.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: j,
                    guild_id: t,
                    media_session_id: w,
                },
            },
            { disableTrack: !T },
        );
    let k = l.useCallback((e) => {
            (P.current = e), R(null == e ? void 0 : e.soundId);
        }, []),
        U = l.useCallback(
            (e) => {
                if (null == e) return void k(null);
                let t = S[e];
                null != t && k(t);
            },
            [k, S],
        ),
        M = l.useCallback(
            (e) => {
                if (null == e) return;
                let t = S[e];
                null != t && Z(t);
            },
            [S, Z],
        ),
        B = l.useMemo(
            () =>
                S.map((e) =>
                    (0, r.jsx)(
                        b.ZP,
                        {
                            interactive: T,
                            className: E.soundButton,
                            sound: e,
                            focused: A === e.soundId,
                            channel: n,
                        },
                        e.soundId,
                    ),
                ),
            [A, n, T, S],
        );
    return 0 === S.length
        ? null
        : (0, r.jsx)(a.Gt, {
              value: D,
              children: (0, r.jsx)(N.Z, {
                  wheelWidth: m,
                  wheelHeight: C,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !v,
                  activeItem: A,
                  onItemSelect: U,
                  onItemAction: M,
                  onClose: I,
                  interactive: T,
                  children: B,
              }),
          });
}
