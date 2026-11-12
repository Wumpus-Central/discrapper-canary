var l = n(582128),
    i = n(855986),
    s = n(643501),
    r = n(652896),
    a = n(616356),
    o = n(46653),
    u = n(734057),
    c = n(775456),
    d = n(130444),
    m = n(712766),
    p = n(677099);
(n(652215),
    n.d(
        t,
        {},
        {
            A: function (e) {
                let { enabled: t } = c.A.useConfig({
                        guildId: e?.guildId ?? "",
                        location: "usePassTheControllerGuestAction",
                    }),
                    n = null != e ? (0, r._z)(e) : null,
                    g = (0, i.bG)([o.default], () => o.default.getId()),
                    f = (0, i.bG)([s.default], () => null != s.default.getRemoteSessionId()),
                    h = e?.channelId ?? null,
                    A = (0, i.bG)([u.A], () => u.A.getChannel(h)?.isGuildStageVoice() ?? !1, [h]),
                    x = (0, i.bG)(
                        [a.A],
                        () => {
                            if (null == e || null == n) return !1;
                            let t = a.A.getActiveStreamForApplicationStream(e);
                            return null != t && (0, r._z)(t) === n;
                        },
                        [e, n],
                    ),
                    [v, E] = (0, i.yK)(
                        [m.A],
                        () => [
                            null != n && m.A.isStreamPassingController(n),
                            null != n && m.A.isSelfHoldingController(n),
                        ],
                        [n],
                    ),
                    C = l.useCallback(() => {
                        null != e && (0, p.N_)(e);
                    }, [e]);
                if (null == e || !t) return null;
                let I = e.ownerId === g;
                return f || I || A || !x || !v ? null : { isActive: E, label: E ? d.Q.DROP : d.Q.GRAB, toggle: C };
            },
        },
    ));
