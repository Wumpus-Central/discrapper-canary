n.d(t, { Z: () => P }), n(361932), n(187205);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(681715),
    c = n(481060),
    u = n(317381),
    d = n(884338),
    f = n(470883),
    h = n(933557),
    p = n(777861),
    g = n(752048),
    b = n(439944),
    m = n(199902),
    y = n(699516),
    O = n(9156),
    v = n(594174),
    j = n(938475),
    C = n(388032),
    x = n(998081);
function E(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: x.row,
              children: [
                  (0, r.jsx)(t, {
                      className: x.activityIcon,
                      color: "currentColor",
                  }),
                  (0, r.jsx)(d.ZP, {
                      users: n,
                      max: 6,
                  }),
              ],
          });
}
function S(e) {
    let { muteConfig: t, className: n } = e;
    return (null == t ? void 0 : t.end_time) == null
        ? (0, r.jsx)(c.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: C.intl.string(C.t.fpKdS1),
          })
        : (0, r.jsx)(p.Z, {
              muteConfig: t,
              className: n,
          });
}
function I(e) {
    let { channel: t } = e,
        n = t.id,
        {
            activityUsers: l,
            streamUsers: s,
            voiceUsers: d,
        } = (function (e) {
            let t = e.id,
                n = (0, o.Wu)([y.Z], () => y.Z.getBlockedOrIgnoredIDs()),
                r = (0, o.e7)([g.Z], () => g.Z.getUserAffinitiesMap(), []),
                l = (0, o.Wu)(
                    [u.ZP, v.default],
                    () =>
                        u.ZP.getEmbeddedActivitiesForChannel(t)
                            .flatMap((e) => Array.from(e.userIds))
                            .map((e) => v.default.getUser(e)),
                    [t],
                ),
                a = i.useMemo(() => (0, f.dq)(l, n), [l, n]),
                s = i.useMemo(() => (0, b.C)(a, r, "DirectMessageTooltip - activityUsers"), [a, r]),
                c = (0, o.Wu)([m.Z, v.default], () => {
                    let e = m.Z.getAllApplicationStreamsForChannel(t)
                        .map((e) => e.ownerId)
                        .map((e) => v.default.getUser(e));
                    return (0, f.dq)(e, n);
                }, [t, n]),
                d = i.useMemo(() => (0, f.dq)(c, n), [c, n]),
                h = i.useMemo(() => (0, b.C)(d, r, "DirectMessageTooltip - activityUsers"), [d, r]),
                p = i.useMemo(() => h.filter((e) => !s.some((t) => t.id === e.id)), [h, s]),
                O = (0, o.Wu)([j.ZP], () => {
                    let t = j.ZP.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                    return (0, f.dq)(t, n);
                }, [e, n]),
                C = i.useMemo(() => (0, f.dq)(O, n), [O, n]),
                x = i.useMemo(() => (0, b.C)(C, r, "DirectMessageTooltip - voiceUsers"), [C, r]);
            return {
                voiceUsers: i.useMemo(
                    () => x.filter((e) => !s.some((t) => t.id === e.id) && !h.some((t) => t.id === e.id)),
                    [x, s, h],
                ),
                streamUsers: p,
                activityUsers: s,
            };
        })(t),
        h = (0, r.jsx)(E, {
            icon: c.gj8,
            users: d,
        }),
        p = (0, r.jsx)(E, {
            icon: c.hGI,
            users: s,
        }),
        C = (0, r.jsx)(E, {
            icon: c.nG3,
            users: l,
        }),
        { isMuted: I, muteConfig: _ } = (0, o.cj)(
            [O.ZP],
            () => ({
                isMuted: O.ZP.isChannelMuted(null, n),
                muteConfig: O.ZP.getChannelMuteConfig(null, n),
            }),
            [n],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            h,
            p,
            C,
            I
                ? (0, r.jsx)(S, {
                      muteConfig: _,
                      className: a()(x.muteText, { [x.muteTextWithActivity]: null != h || null != p }),
                  })
                : null,
        ],
    });
}
function _(e) {
    let { channel: t } = e,
        n = (0, h.ZP)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: a()(x.row, x.rowGuildName),
                children: (0, r.jsx)("span", {
                    className: a()(x.guildNameText, x.guildNameTextLimitedSize),
                    children: n,
                }),
            }),
            (0, r.jsx)(I, { channel: t }),
        ],
    });
}
function P(e) {
    let { channel: t, children: n } = e,
        l = (0, h.ZP)(t),
        a = i.useMemo(
            () =>
                (0, r.jsx)("div", {
                    className: x.guildTooltipWrapper,
                    children: (0, r.jsx)(_, { channel: t }),
                }),
            [t],
        );
    return (0, r.jsx)(s.u, {
        __unsupportedReactNodeAsText: a,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": null != l ? l : void 0,
        asContainer: !0,
        children: n,
    });
}
