n.d(t, { Z: () => T }), n(47120), n(653041);
var l = n(200651),
    i = n(192379),
    s = n(990547),
    o = n(442837),
    a = n(100527),
    r = n(906732),
    c = n(213609),
    u = n(675478),
    d = n(19780),
    h = n(709054),
    N = n(208049),
    f = n(763296),
    g = n(242291),
    x = n(174470),
    C = n(549771),
    p = n(964398),
    I = n(409673),
    v = n(710111),
    m = n(6609);
function T(e) {
    let { guildId: t, channel: n, width: T, height: E, keepOpen: O, interactive: _ = !0, analyticsSource: y, onClose: b } = e,
        S = (function (e) {
            let [t, n] = (0, o.Wu)([f.Z], () => [f.Z.getSounds(), f.Z.getFavorites()]);
            return i.useMemo(() => {
                let l = [],
                    i = [...e, v.X8],
                    s = (e, i) => {
                        var s, o;
                        for (let a of null !== (o = null === (s = t.get(e)) || void 0 === s ? void 0 : s.sort((e, t) => h.default.compare(e.soundId, t.soundId))) && void 0 !== o ? o : []) {
                            let e = n.has(a.soundId);
                            ((e && i) || (!e && !i)) && a.available && l.push(a);
                        }
                    };
                return i.forEach((e) => s(e, !0)), i.forEach((e) => s(e, !1)), l;
            }, [t, n, e]);
        })((0, C.h)(n, !0)),
        j = (0, x.j)(),
        R = i.useRef(null),
        [Z, A] = i.useState(void 0),
        P = (0, o.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: w } = (0, r.ZP)(a.Z.SOUNDBOARD_WHEEL),
        k = i.useCallback(
            (e) => {
                (0, g.GN)(e, n.id, w), b();
            },
            [w, n.id, b]
        );
    i.useEffect(() => {
        N.w(), u.DZ.loadIfNecessary();
    }, []),
        i.useEffect(() => {
            0 === S.length && 0 === j.length && b();
        }, [S.length, j, b]),
        i.useEffect(
            () => () => {
                let e = R.current;
                O || null == e || k(e);
            },
            [O, k]
        ),
        (0, c.Z)(
            {
                type: s.ImpressionTypes.POPOUT,
                name: s.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: y,
                    guild_id: t,
                    media_session_id: P
                }
            },
            { disableTrack: !_ }
        );
    let D = i.useCallback((e) => {
            (R.current = e), A(null == e ? void 0 : e.soundId);
        }, []),
        F = i.useCallback(
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
        M = i.useCallback(
            (e) => {
                if (null == e) return;
                let t = S[e];
                null != t && k(t);
            },
            [S, k]
        ),
        B = i.useMemo(
            () =>
                S.map((e) =>
                    (0, l.jsx)(
                        I.ZP,
                        {
                            interactive: _,
                            className: m.soundButton,
                            sound: e,
                            focused: Z === e.soundId,
                            channel: n
                        },
                        e.soundId
                    )
                ),
            [Z, n, _, S]
        );
    return 0 === S.length
        ? null
        : (0, l.jsx)(r.Gt, {
              value: w,
              children: (0, l.jsx)(p.Z, {
                  wheelWidth: T,
                  wheelHeight: E,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !O,
                  activeItem: Z,
                  onItemSelect: F,
                  onItemAction: M,
                  interactive: _,
                  children: B
              })
          });
}
