n.d(t, { Z: () => v }), n(47120), n(653041);
var l = n(200651),
    s = n(192379),
    r = n(990547),
    a = n(442837),
    i = n(100527),
    o = n(906732),
    c = n(213609),
    u = n(675478),
    d = n(19780),
    h = n(709054),
    x = n(208049),
    g = n(763296),
    N = n(242291),
    C = n(174470),
    f = n(549771),
    m = n(964398),
    E = n(409673),
    p = n(710111),
    T = n(6609);
function v(e) {
    let { guildId: t, channel: n, width: v, height: I, keepOpen: O, interactive: j = !0, analyticsSource: y, onClose: S } = e,
        _ = (function (e) {
            let [t, n] = (0, a.Wu)([g.Z], () => [g.Z.getSounds(), g.Z.getFavorites()]);
            return s.useMemo(() => {
                let l = [],
                    s = [...e, p.X8],
                    r = (e, s) => {
                        var r, a;
                        for (let i of null !== (a = null === (r = t.get(e)) || void 0 === r ? void 0 : r.sort((e, t) => h.default.compare(e.soundId, t.soundId))) && void 0 !== a ? a : []) {
                            let e = n.has(i.soundId);
                            ((e && s) || (!e && !s)) && i.available && l.push(i);
                        }
                    };
                return s.forEach((e) => r(e, !0)), s.forEach((e) => r(e, !1)), l;
            }, [t, n, e]);
        })((0, f.h)(n, !0)),
        b = (0, C.j)(),
        R = s.useRef(null),
        [P, Z] = s.useState(void 0),
        A = (0, a.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: w } = (0, o.ZP)(i.Z.SOUNDBOARD_WHEEL),
        D = s.useCallback(
            (e) => {
                (0, N.GN)(e, n.id, w), S();
            },
            [w, n.id, S]
        );
    s.useEffect(() => {
        x.w(), u.DZ.loadIfNecessary();
    }, []),
        s.useEffect(() => {
            0 === _.length && 0 === b.length && S();
        }, [_.length, b, S]),
        s.useEffect(
            () => () => {
                let e = R.current;
                O || null == e || D(e);
            },
            [O, D]
        ),
        (0, c.Z)(
            {
                type: r.ImpressionTypes.POPOUT,
                name: r.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: y,
                    guild_id: t,
                    media_session_id: A
                }
            },
            { disableTrack: !j }
        );
    let k = s.useCallback((e) => {
            (R.current = e), Z(null == e ? void 0 : e.soundId);
        }, []),
        B = s.useCallback(
            (e) => {
                if (null == e) {
                    k(null);
                    return;
                }
                let t = _[e];
                null != t && k(t);
            },
            [k, _]
        ),
        M = s.useCallback(
            (e) => {
                if (null == e) return;
                let t = _[e];
                null != t && D(t);
            },
            [_, D]
        ),
        L = s.useMemo(
            () =>
                _.map((e) =>
                    (0, l.jsx)(
                        E.ZP,
                        {
                            interactive: j,
                            className: T.soundButton,
                            sound: e,
                            focused: P === e.soundId,
                            channel: n
                        },
                        e.soundId
                    )
                ),
            [P, n, j, _]
        );
    return 0 === _.length
        ? null
        : (0, l.jsx)(o.Gt, {
              value: w,
              children: (0, l.jsx)(m.Z, {
                  wheelWidth: v,
                  wheelHeight: I,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !O,
                  activeItem: P,
                  onItemSelect: B,
                  onItemAction: M,
                  interactive: j,
                  children: L
              })
          });
}
