n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120),
    n(653041);
var l = n(200651),
    r = n(192379),
    s = n(990547),
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
function v(e) {
    let { guildId: t, channel: n, width: v, height: I, keepOpen: O, interactive: j = !0, analyticsSource: y, onClose: b } = e,
        S = (function (e) {
            let [t, n] = (0, i.Wu)([g.Z], () => [g.Z.getSounds(), g.Z.getFavorites()]);
            return r.useMemo(() => {
                let l = [],
                    r = [...e, E.X8],
                    s = (e, r) => {
                        var s, i;
                        for (let o of null !== (i = null === (s = t.get(e)) || void 0 === s ? void 0 : s.sort((e, t) => h.default.compare(e.soundId, t.soundId))) && void 0 !== i ? i : []) {
                            let e = n.has(o.soundId);
                            ((e && r) || (!e && !r)) && o.available && l.push(o);
                        }
                    };
                return r.forEach((e) => s(e, !0)), r.forEach((e) => s(e, !1)), l;
            }, [t, n, e]);
        })((0, f.h)(n, !0)),
        R = (0, C.j)(),
        _ = r.useRef(null),
        [Z, A] = r.useState(void 0),
        P = (0, i.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: k } = (0, a.ZP)(o.Z.SOUNDBOARD_WHEEL),
        B = r.useCallback(
            (e) => {
                (0, N.GN)(e, n.id, k), b();
            },
            [k, n.id, b]
        );
    r.useEffect(() => {
        x.w(), u.DZ.loadIfNecessary();
    }, []),
        r.useEffect(() => {
            0 === S.length && 0 === R.length && b();
        }, [S.length, R, b]),
        r.useEffect(
            () => () => {
                let e = _.current;
                !O && null != e && B(e);
            },
            [O, B]
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
            { disableTrack: !j }
        );
    let w = r.useCallback((e) => {
            (_.current = e), A(null == e ? void 0 : e.soundId);
        }, []),
        D = r.useCallback(
            (e) => {
                if (null == e) {
                    w(null);
                    return;
                }
                let t = S[e];
                if (null != t) w(t);
            },
            [w, S]
        ),
        M = r.useCallback(
            (e) => {
                if (null == e) return;
                let t = S[e];
                if (null != t) B(t);
            },
            [S, B]
        ),
        L = r.useMemo(
            () =>
                S.map((e) =>
                    (0, l.jsx)(
                        m.ZP,
                        {
                            interactive: j,
                            className: T.soundButton,
                            sound: e,
                            focused: Z === e.soundId,
                            channel: n
                        },
                        e.soundId
                    )
                ),
            [Z, n, j, S]
        );
    return 0 === S.length
        ? null
        : (0, l.jsx)(a.Gt, {
              value: k,
              children: (0, l.jsx)(p.Z, {
                  wheelWidth: v,
                  wheelHeight: I,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !O,
                  activeItem: Z,
                  onItemSelect: D,
                  onItemAction: M,
                  interactive: j,
                  children: L
              })
          });
}
