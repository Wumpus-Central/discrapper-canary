n.d(t, { Z: () => T }), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    o = n(990547),
    s = n(442837),
    a = n(100527),
    r = n(906732),
    c = n(213609),
    u = n(675478),
    d = n(19780),
    h = n(709054),
    f = n(208049),
    N = n(763296),
    g = n(242291),
    x = n(174470),
    p = n(549771),
    C = n(964398),
    I = n(409673),
    v = n(710111),
    m = n(901008);
function T(e) {
    let { guildId: t, channel: n, width: T, height: E, keepOpen: O, interactive: _ = !0, analyticsSource: b, onClose: y } = e,
        S = (function (e) {
            let [t, n] = (0, s.Wu)([N.Z], () => [N.Z.getSounds(), N.Z.getFavorites()]);
            return l.useMemo(() => {
                let i = [],
                    l = [...e, v.X8],
                    o = (e, l) => {
                        var o, s;
                        for (let a of null !== (s = null === (o = t.get(e)) || void 0 === o ? void 0 : o.sort((e, t) => h.default.compare(e.soundId, t.soundId))) && void 0 !== s ? s : []) {
                            let e = n.has(a.soundId);
                            ((e && l) || (!e && !l)) && a.available && i.push(a);
                        }
                    };
                return l.forEach((e) => o(e, !0)), l.forEach((e) => o(e, !1)), i;
            }, [t, n, e]);
        })((0, p.h)(n, !0)),
        Z = (0, x.j)(),
        R = l.useRef(null),
        [j, A] = l.useState(void 0),
        P = (0, s.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: w } = (0, r.ZP)(a.Z.SOUNDBOARD_WHEEL),
        k = l.useCallback(
            (e) => {
                (0, g.GN)(e, n.id, w), y();
            },
            [w, n.id, y]
        );
    l.useEffect(() => {
        f.w(), u.DZ.loadIfNecessary();
    }, []),
        l.useEffect(() => {
            0 === S.length && 0 === Z.length && y();
        }, [S.length, Z, y]),
        l.useEffect(
            () => () => {
                let e = R.current;
                O || null == e || k(e);
            },
            [O, k]
        ),
        (0, c.Z)(
            {
                type: o.ImpressionTypes.POPOUT,
                name: o.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: b,
                    guild_id: t,
                    media_session_id: P
                }
            },
            { disableTrack: !_ }
        );
    let D = l.useCallback((e) => {
            (R.current = e), A(null == e ? void 0 : e.soundId);
        }, []),
        M = l.useCallback(
            (e) => {
                if (null == e) {
                    D(null);
                    return;
                }
                let t = S[e];
                null != t && D(t);
            },
            [D, S]
        ),
        F = l.useCallback(
            (e) => {
                if (null == e) return;
                let t = S[e];
                null != t && k(t);
            },
            [S, k]
        ),
        B = l.useMemo(
            () =>
                S.map((e) =>
                    (0, i.jsx)(
                        I.ZP,
                        {
                            interactive: _,
                            className: m.soundButton,
                            sound: e,
                            focused: j === e.soundId,
                            channel: n
                        },
                        e.soundId
                    )
                ),
            [j, n, _, S]
        );
    return 0 === S.length
        ? null
        : (0, i.jsx)(r.Gt, {
              value: w,
              children: (0, i.jsx)(C.Z, {
                  wheelWidth: T,
                  wheelHeight: E,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !O,
                  activeItem: j,
                  onItemSelect: M,
                  onItemAction: F,
                  interactive: _,
                  children: B
              })
          });
}
