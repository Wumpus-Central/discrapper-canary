n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120),
    n(653041);
var l = n(200651),
    s = n(192379),
    r = n(990547),
    i = n(442837),
    o = n(100527),
    a = n(906732),
    c = n(213609),
    u = n(675478),
    d = n(19780),
    h = n(709054),
    x = n(208049),
    g = n(763296),
    N = n(242291),
    C = n(174470),
    f = n(549771),
    p = n(964398),
    m = n(409673),
    E = n(710111),
    T = n(6609);
function I(e) {
    let { guildId: t, channel: n, width: I, height: v, keepOpen: O, interactive: j = !0, analyticsSource: y, onClose: S } = e,
        b = (function (e) {
            let [t, n] = (0, i.Wu)([g.Z], () => [g.Z.getSounds(), g.Z.getFavorites()]);
            return s.useMemo(() => {
                let l = [],
                    s = [...e, E.X8],
                    r = (e, s) => {
                        var r, i;
                        for (let o of null !== (i = null === (r = t.get(e)) || void 0 === r ? void 0 : r.sort((e, t) => h.default.compare(e.soundId, t.soundId))) && void 0 !== i ? i : []) {
                            let e = n.has(o.soundId);
                            ((e && s) || (!e && !s)) && o.available && l.push(o);
                        }
                    };
                return s.forEach((e) => r(e, !0)), s.forEach((e) => r(e, !1)), l;
            }, [t, n, e]);
        })((0, f.h)(n, !0)),
        R = (0, C.j)(),
        _ = s.useRef(null),
        [A, Z] = s.useState(void 0),
        P = (0, i.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: k } = (0, a.ZP)(o.Z.SOUNDBOARD_WHEEL),
        B = s.useCallback(
            (e) => {
                (0, N.GN)(e, n.id, k), S();
            },
            [k, n.id, S]
        );
    s.useEffect(() => {
        x.w(), u.DZ.loadIfNecessary();
    }, []),
        s.useEffect(() => {
            0 === b.length && 0 === R.length && S();
        }, [b.length, R, S]),
        s.useEffect(
            () => () => {
                let e = _.current;
                !O && null != e && B(e);
            },
            [O, B]
        ),
        (0, c.Z)(
            {
                type: r.ImpressionTypes.POPOUT,
                name: r.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: y,
                    guild_id: t,
                    media_session_id: P
                }
            },
            { disableTrack: !j }
        );
    let w = s.useCallback((e) => {
            (_.current = e), Z(null == e ? void 0 : e.soundId);
        }, []),
        D = s.useCallback(
            (e) => {
                if (null == e) {
                    w(null);
                    return;
                }
                let t = b[e];
                if (null != t) w(t);
            },
            [w, b]
        ),
        M = s.useCallback(
            (e) => {
                if (null == e) return;
                let t = b[e];
                if (null != t) B(t);
            },
            [b, B]
        ),
        L = s.useMemo(
            () =>
                b.map((e) =>
                    (0, l.jsx)(
                        m.ZP,
                        {
                            interactive: j,
                            className: T.soundButton,
                            sound: e,
                            focused: A === e.soundId,
                            channel: n
                        },
                        e.soundId
                    )
                ),
            [A, n, j, b]
        );
    return 0 === b.length
        ? null
        : (0, l.jsx)(a.Gt, {
              value: k,
              children: (0, l.jsx)(p.Z, {
                  wheelWidth: I,
                  wheelHeight: v,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !O,
                  activeItem: A,
                  onItemSelect: D,
                  onItemAction: M,
                  interactive: j,
                  children: L
              })
          });
}
