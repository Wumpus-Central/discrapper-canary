n.d(t, { Z: () => E }), n(388685), n(642613), n(539854);
var r = n(951288),
    l = n(647438),
    s = n(990547),
    i = n(442837),
    a = n(100527),
    o = n(906732),
    c = n(213609),
    u = n(675478),
    d = n(19780),
    h = n(709054),
    f = n(208049),
    g = n(763296),
    p = n(242291),
    O = n(174470),
    y = n(549771),
    x = n(964398),
    b = n(294206),
    N = n(710111),
    m = n(649093);
function E(e) {
    let {
            guildId: t,
            channel: n,
            width: E,
            height: C,
            keepOpen: j,
            interactive: v = !0,
            analyticsSource: T,
            onClose: I,
        } = e,
        P = (function (e) {
            let [t, n] = (0, i.Wu)([g.Z], () => [g.Z.getSounds(), g.Z.getFavorites()]);
            return l.useMemo(() => {
                let r = [],
                    l = [...e, N.X8],
                    s = (e, l) => {
                        var s, i;
                        for (let a of null !=
                        (i =
                            null == (s = t.get(e)) ? void 0 : s.sort((e, t) => h.default.compare(e.soundId, t.soundId)))
                            ? i
                            : []) {
                            let e = n.has(a.soundId);
                            ((e && l) || (!e && !l)) && a.available && r.push(a);
                        }
                    };
                return l.forEach((e) => s(e, !0)), l.forEach((e) => s(e, !1)), r;
            }, [t, n, e]);
        })((0, y.h)(n, !0)),
        S = (0, O.j)(),
        _ = l.useRef(null),
        [R, w] = l.useState(void 0),
        D = (0, i.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: A } = (0, o.ZP)(a.Z.SOUNDBOARD_WHEEL),
        Z = l.useCallback(
            (e) => {
                (0, p.GN)(e, n.id, A), I();
            },
            [A, n.id, I],
        );
    l.useEffect(() => {
        f.w(), u.DZ.loadIfNecessary();
    }, []),
        l.useEffect(() => {
            0 === P.length && 0 === S.length && I();
        }, [P.length, S, I]),
        l.useEffect(
            () => () => {
                let e = _.current;
                j || null == e || Z(e);
            },
            [j, Z],
        ),
        (0, c.Z)(
            {
                type: s.ImpressionTypes.POPOUT,
                name: s.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: T,
                    guild_id: t,
                    media_session_id: D,
                },
            },
            { disableTrack: !v },
        );
    let k = l.useCallback((e) => {
            (_.current = e), w(null == e ? void 0 : e.soundId);
        }, []),
        M = l.useCallback(
            (e) => {
                if (null == e) return void k(null);
                let t = P[e];
                null != t && k(t);
            },
            [k, P],
        ),
        B = l.useCallback(
            (e) => {
                if (null == e) return;
                let t = P[e];
                null != t && Z(t);
            },
            [P, Z],
        ),
        L = l.useMemo(
            () =>
                P.map((e) =>
                    (0, r.jsx)(
                        b.ZP,
                        {
                            interactive: v,
                            className: m.soundButton,
                            sound: e,
                            focused: R === e.soundId,
                            channel: n,
                        },
                        e.soundId,
                    ),
                ),
            [R, n, v, P],
        );
    return 0 === P.length
        ? null
        : (0, r.jsx)(o.Gt, {
              value: A,
              children: (0, r.jsx)(x.Z, {
                  wheelWidth: E,
                  wheelHeight: C,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !j,
                  activeItem: R,
                  onItemSelect: M,
                  onItemAction: B,
                  onClose: I,
                  interactive: v,
                  children: L,
              }),
          });
}
