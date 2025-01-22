n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(789020);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(512722),
    s = n.n(o),
    d = n(392711),
    c = n.n(d),
    u = n(533800),
    m = n(399606),
    h = n(692547),
    p = n(481060),
    g = n(447543),
    x = n(225433),
    f = n(129861),
    v = n(493544),
    b = n(700582),
    C = n(410030),
    I = n(933557),
    N = n(346486),
    j = n(600164),
    T = n(666657),
    _ = n(487419),
    Z = n(664452),
    E = n(560114),
    S = n(699516),
    y = n(594174),
    A = n(630388),
    L = n(965638),
    R = n(981631),
    k = n(388032),
    O = n(170465),
    w = n(684309),
    M = n(232186);
let P = {
    INVITER: 3,
    INVITE_CODE: 3,
    USES: 1,
    EXPIRES: 2
};
function B(e) {
    var t;
    let { invite: n, showChannel: l = !1, inviteDisabled: r = !1, hide: o = !1 } = e,
        s = n.uses;
    return (
        n.maxUses > 0 && (s = ''.concat(n.uses, '/').concat(n.maxUses)),
        (0, i.jsxs)(j.Z, {
            className: a()(O.inviteSettingsInviteRow, w.card, { [O.inviteDisabledRow]: r }),
            children: [
                (0, i.jsxs)(j.Z, {
                    grow: P.INVITER,
                    basis: 0,
                    align: j.Z.Align.CENTER,
                    className: a()(O.text),
                    children: [
                        null != n.inviter &&
                            (0, i.jsx)(b.Z, {
                                user: n.inviter,
                                size: p.AvatarSizes.SIZE_24,
                                className: O.avatar
                            }),
                        (0, i.jsxs)('div', {
                            children: [
                                null != n.inviter &&
                                    (0, i.jsx)(f.Z, {
                                        discriminatorClass: O.discriminator,
                                        user: n.inviter
                                    }),
                                l &&
                                    (0, i.jsx)(p.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: (0, I.F6)(n.channel, y.default, S.Z, !0)
                                    })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(j.Z, {
                    grow: P.INVITE_CODE,
                    shrink: 1,
                    basis: 0,
                    align: j.Z.Align.CENTER,
                    className: O.text,
                    children: (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(p.Text, {
                                className: O.inviteCode,
                                variant: 'text-sm/normal',
                                children: o ? '...' : n.code
                            }),
                            !o && (0, A.yE)(null !== (t = n.flags) && void 0 !== t ? t : 0, u.$.IS_APPLICATION_BYPASS)
                                ? (0, i.jsxs)('div', {
                                      className: O.bypass,
                                      children: [
                                          (0, i.jsx)(p.Text, {
                                              className: O.text,
                                              variant: 'text-xs/normal',
                                              color: 'text-muted',
                                              children: k.intl.string(k.t['1i1bUl'])
                                          }),
                                          (0, i.jsx)(p.Tooltip, {
                                              text: k.intl.string(k.t['jvd/LC']),
                                              children: (e) =>
                                                  (0, i.jsx)(p.CircleInformationIcon, {
                                                      size: 'xxs',
                                                      color: 'currentColor',
                                                      ...e,
                                                      className: O.infoIcon
                                                  })
                                          })
                                      ]
                                  })
                                : null
                        ]
                    })
                }),
                (0, i.jsx)(j.Z, {
                    grow: P.USES,
                    basis: 0,
                    align: j.Z.Align.CENTER,
                    className: a()(O.text),
                    children: (0, i.jsx)(p.Text, {
                        className: O.uses,
                        variant: 'text-sm/normal',
                        children: s
                    })
                }),
                (0, i.jsx)(j.Z, {
                    grow: P.EXPIRES,
                    basis: 0,
                    align: j.Z.Align.CENTER,
                    className: a()(O.text, O.countdownColumn),
                    children: (0, i.jsx)(p.Text, {
                        className: O.countdown,
                        variant: 'text-sm/normal',
                        children: (0, i.jsx)(N.Z, { deadline: n.getExpiresAt() })
                    })
                }),
                (0, i.jsx)(x.Z, {
                    className: O.revokeInvite,
                    onClick: () => {
                        g.Z.revokeInvite(n);
                    }
                })
            ]
        })
    );
}
function D(e) {
    let { invites: t, guild: r, hide: a, channel: o = null, showChannel: d = !1, loading: u = !1, canCreateInvites: g = !1 } = e;
    s()(null != r, 'guild is required');
    let x = (0, L.M)(r),
        f = (0, m.e7)([_.Z], () => _.Z.getGuildIncident(r.id)),
        b = r.hasFeature(R.oNc.INVITES_DISABLED) || ((null == f ? void 0 : f.invitesDisabledUntil) != null && new Date(f.invitesDisabledUntil) > new Date()),
        I = (0, C.ZP)(),
        N = l.useMemo(
            () =>
                null == t || u
                    ? []
                    : c()(t)
                          .sortBy((e) => {
                              var t, n;
                              return (null !== (n = null === (t = e.inviter) || void 0 === t ? void 0 : t.username) && void 0 !== n ? n : '').toLowerCase();
                          })
                          .value(),
            [t, u]
        ),
        S = () => {
            (0, p.openModalLazy)(
                async () => (e) =>
                    (0, i.jsx)(E.default, {
                        ...e,
                        channel: o,
                        guild: r,
                        source: R.t4x.SETTINGS_INVITE
                    })
            );
        },
        y = () => {
            let e = { source: T.Zu.GUILD_SETTINGS };
            (0, p.openModalLazy)(
                async () => (t) =>
                    (0, i.jsx)(Z.default, {
                        ...t,
                        guildId: r.id,
                        analyticsData: e
                    })
            );
        };
    return (0, i.jsx)(v.Xi, {
        sections: [Math.max(1, N.length)],
        renderSection: () => {
            let e;
            return (
                (e =
                    0 !== N.length || u
                        ? (0, i.jsxs)(j.Z, {
                              children: [
                                  (0, i.jsx)(j.Z.Child, {
                                      grow: P.INVITER,
                                      basis: 0,
                                      className: M.marginReset,
                                      children: (0, i.jsx)(p.FormTitle, { children: k.intl.string(k.t.EgHyKy) })
                                  }),
                                  (0, i.jsx)(j.Z.Child, {
                                      basis: 0,
                                      grow: P.INVITE_CODE,
                                      className: M.marginReset,
                                      children: (0, i.jsx)(p.FormTitle, { children: k.intl.string(k.t.LBlFEB) })
                                  }),
                                  (0, i.jsx)(j.Z.Child, {
                                      grow: P.USES,
                                      basis: 0,
                                      children: (0, i.jsx)(p.FormTitle, { children: k.intl.string(k.t.erWrmJ) })
                                  }),
                                  (0, i.jsx)(j.Z.Child, {
                                      grow: P.EXPIRES,
                                      basis: 0,
                                      children: (0, i.jsx)(p.FormTitle, { children: k.intl.string(k.t['1aM27e']) })
                                  })
                              ]
                          })
                        : (0, i.jsxs)(p.EmptyState, {
                              theme: I,
                              children: [
                                  (0, i.jsx)(p.EmptyStateImage, {
                                      darkSrc: n(914814),
                                      lightSrc: n(370392),
                                      width: 256,
                                      height: 130
                                  }),
                                  (0, i.jsx)(p.EmptyStateText, {
                                      note: k.intl.string(k.t.F53CAQ),
                                      children: k.intl.string(k.t['+nLJkZ'])
                                  })
                              ]
                          })),
                (0, i.jsx)(
                    p.FormSection,
                    {
                        className: O.headerSection,
                        children: (0, i.jsxs)(p.HeadingLevel, {
                            component: (0, i.jsx)(p.FormTitle, {
                                tag: p.FormTitleTags.H1,
                                children: k.intl.string(k.t['9F90iY'])
                            }),
                            children: [
                                (0, i.jsx)(p.FormText, {
                                    className: M.marginBottom20,
                                    type: p.FormTextTypes.DESCRIPTION,
                                    children: g ? k.intl.format(k.t['97VdNj'], { onCreateInvite: S }) : k.intl.string(k.t.WDw38P)
                                }),
                                (0, i.jsxs)('div', {
                                    className: O.inviteDisabledContainer,
                                    children: [
                                        (0, i.jsx)(p.Button, {
                                            size: p.Button.Sizes.SMALL,
                                            color: b ? p.Button.Colors.BRAND : p.Button.Colors.RED,
                                            disabled: !x,
                                            onClick: y,
                                            children: b ? k.intl.string(k.t['/dbw3N']) : k.intl.string(k.t.Uwsjn5)
                                        }),
                                        b &&
                                            (0, i.jsxs)('div', {
                                                className: O.inviteDisabledTip,
                                                children: [
                                                    (0, i.jsx)(p.CircleWarningIcon, {
                                                        size: 'custom',
                                                        width: 20,
                                                        height: 20,
                                                        color: h.Z.unsafe_rawColors.YELLOW_300.css
                                                    }),
                                                    (0, i.jsx)(p.Text, {
                                                        variant: 'text-sm/normal',
                                                        children: k.intl.string(k.t['2LLbj4'])
                                                    })
                                                ]
                                            })
                                    ]
                                }),
                                (0, i.jsx)(p.FormDivider, { className: O.headerDivider }),
                                e
                            ]
                        })
                    },
                    'header'
                )
            );
        },
        renderRow: (e) => {
            let { section: t, row: n } = e;
            if (0 === N.length && 0 === n && u)
                return (0, i.jsx)(
                    p.Spinner,
                    {
                        className: M.marginTop20,
                        type: p.Spinner.Type.SPINNING_CIRCLE
                    },
                    'spinner'
                );
            if (t > 0) return null;
            let l = N[n];
            return null == l
                ? null
                : (0, i.jsx)(
                      B,
                      {
                          hide: a,
                          invite: l,
                          showChannel: d,
                          inviteDisabled: b
                      },
                      l.code
                  );
        },
        rowHeight: (e, t) => (e > 0 ? 0 : 0 === N.length && 0 === t && u ? 62 : null != N[t] ? 62 : 0),
        sectionHeight: () => (0 !== N.length || u ? 120 : 344)
    });
}
