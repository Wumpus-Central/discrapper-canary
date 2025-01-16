n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    l = n(120356),
    s = n.n(l),
    c = n(442837),
    o = n(481060),
    r = n(239091),
    d = n(434650),
    u = n(895924),
    p = n(70097),
    f = n(695346),
    m = n(594174),
    g = n(695103),
    v = n(880448),
    h = n(823379),
    x = n(5192),
    b = n(624138),
    C = n(115130),
    I = n(147865),
    T = n(542094),
    _ = n(665811),
    Z = n(182906),
    S = n(556505),
    N = n(513202),
    y = n(884338),
    j = n(823531),
    E = n(388032),
    A = n(96339),
    M = n(969728);
function O(e) {
    let { value: t, icon: n } = e;
    return (0, i.jsxs)(o.Text, {
        className: A.activityTag,
        color: 'interactive-normal',
        variant: 'text-xs/semibold',
        children: [(0, h.lm)(n) ? (0, i.jsx)(n, { className: A.icon }) : null, t]
    });
}
function L(e) {
    let { activity: t, application: n, channel: a, guildId: l, large: s = !1 } = e,
        r = (0, c.Wu)([m.default], () => {
            var e;
            return Array.from(null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e ? e : [])
                .map((e) => {
                    let [t] = e;
                    return m.default.getUser(t);
                })
                .filter(h.lm);
        }),
        d = x.ZP.getName(l, null == a ? void 0 : a.id, null == r ? void 0 : r[0]);
    if (((d = (0, b.aF)(d, 15)), null == t || 0 === r.length)) {
        var u, p;
        let e = ''.concat((0, I.ZP)(null !== (u = n.maxParticipants) && void 0 !== u ? u : 0));
        return (
            s && (e = null !== (p = n.description) && void 0 !== p ? p : ''),
            (0, i.jsx)(o.Text, {
                className: A.activitySubtitleText,
                variant: 'text-xs/normal',
                color: 'interactive-normal',
                children: e
            })
        );
    }
    return (0, i.jsxs)('div', {
        className: A.activitySubtitleText,
        children: [
            (0, i.jsx)(o.Text, {
                className: A.usersArePlayingText,
                variant: 'text-xs/normal',
                children:
                    r.length > 1
                        ? E.intl.formatToPlainString(E.t.cpe6CA, {
                              username: d,
                              count: r.length - 1
                          })
                        : E.intl.formatToPlainString(E.t['7Uuia2'], { username: d })
            }),
            (0, i.jsx)(y.Z, {
                size: s ? y.u.SIZE_24 : y.u.SIZE_16,
                guildId: l,
                users: r,
                max: 6
            })
        ]
    });
}
function w(e) {
    var t;
    let { activityItem: n, channel: l, guildId: m, locationObject: h, onActivityItemVisible: x, onActivityItemSelected: b, large: y = !1 } = e,
        {
            imageBackground: w,
            videoUrl: k,
            activityAction: B,
            joinableEmbeddedApp: D,
            onActivityItemSelected: P,
            labelType: R,
            staffReleasePhase: F
        } = (0, T.ZP)({
            activityItem: n,
            channel: l,
            guildId: m,
            locationObject: h,
            onActivityItemVisible: x,
            onActivityItemSelected: b,
            embeddedActivitiesManager: N.Z,
            commandOrigin: u.bB.APPLICATION_LAUNCHER
        }),
        H = (0, c.e7)([C.Z, g.Z], () => C.Z.inDevModeForApplication(n.application.id) || g.Z.inTestModeForApplication(n.application.id), [n.application.id]),
        { application: V } = n,
        U = a.useCallback((e) => e && (null == x ? void 0 : x({ applicationId: n.application.id })), [n.application.id, x]),
        Y = (0, d.O)(U, 0.8, !0),
        [G, W] = a.useState(!1),
        [z, q] = a.useState(G);
    a.useEffect(() => {
        G && q(!0);
    }, [G]);
    let J = () => W(!0),
        X = () => W(!1),
        Q = f.Sb.useSetting(),
        $ = a.useCallback(() => {
            null == P || P();
        }, [P]);
    return (0, i.jsxs)(o.Clickable, {
        onClick: B === T.JS.START ? $ : void 0,
        onContextMenu: Q
            ? (e) => {
                  (0, r.vq)(e, (e) =>
                      (0, i.jsx)(j.Z, {
                          application: V,
                          ...e
                      })
                  );
              }
            : void 0,
        className: s()(A.activityItem, {
            [A.large]: !0 === y,
            [A.disabled]: B !== T.JS.START
        }),
        children: [
            (0, i.jsxs)('div', {
                ref: Y,
                className: s()(A.activityImageContainer, { [A.large]: !0 === y }),
                onMouseEnter: J,
                onFocus: J,
                onMouseLeave: X,
                onBlur: X,
                children: [
                    (0, i.jsx)(Z.Z, {
                        imageBackground: w,
                        applicationName: V.name,
                        imageClassName: s()(A.activityImage, { [A.large]: !0 === y }),
                        imageNotFoundClassName: A.brokenImageIconWrapper
                    }),
                    null != k && z && B === T.JS.START
                        ? (0, i.jsx)('div', {
                              className: s()(A.activityVideo, { [A.videoFadeOut]: !G }),
                              onAnimationEnd: () => (G ? null : q(!1)),
                              children: (0, i.jsx)(p.Z, {
                                  className: A.activityVideo,
                                  src: k,
                                  loop: !0,
                                  autoPlay: !0,
                                  muted: !0
                              })
                          })
                        : null,
                    B !== T.JS.START
                        ? (0, i.jsx)(_.U, {
                              action: B,
                              onClick: $
                          })
                        : null,
                    (0, i.jsx)('div', {
                        className: A.overlayBadge,
                        children: (0, i.jsx)('div', {
                            className: A.badgeContainer,
                            children: (0, i.jsx)(S.Z, {
                                name: V.name,
                                labelType: R
                            })
                        })
                    }),
                    H
                        ? (0, i.jsx)(o.Tooltip, {
                              text: E.intl.string(E.t.CfTySU),
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: A.devShelfBadge,
                                      ...e,
                                      children: (0, i.jsx)(v.Z, { className: A.devShelfIcon })
                                  })
                          })
                        : null
                ]
            }),
            (0, i.jsxs)('div', {
                className: s()(A.activityTextContainer, { [A.large]: y }),
                children: [
                    y
                        ? (0, i.jsx)(o.Text, {
                              className: A.activityMaxParticipantsLarge,
                              variant: 'text-xs/normal',
                              color: 'interactive-normal',
                              children: (0, I.ZP)(null !== (t = V.maxParticipants) && void 0 !== t ? t : 0)
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: A.activityName,
                        children: [
                            (0, i.jsx)(o.Heading, {
                                className: A.activityTitleText,
                                variant: 'heading-md/semibold',
                                color: 'interactive-active',
                                children: V.name
                            }),
                            null != F
                                ? (0, i.jsx)(o.Tooltip, {
                                      text: F,
                                      children: (e) =>
                                          (0, i.jsx)('img', {
                                              className: A.staffBadge,
                                              alt: F,
                                              src: M,
                                              ...e
                                          })
                                  })
                                : null
                        ]
                    }),
                    (0, i.jsx)(L, {
                        activity: null == D ? void 0 : D.embeddedActivity,
                        application: V,
                        channel: l,
                        guildId: m,
                        large: y
                    }),
                    (0, i.jsx)('div', {
                        className: A.activityTagsContainer,
                        children: V.tags.slice(0, 3).map((e) => (0, i.jsx)(O, { value: e }, 'activity-tag-'.concat(V.id, '-').concat(e)))
                    })
                ]
            })
        ]
    });
}
