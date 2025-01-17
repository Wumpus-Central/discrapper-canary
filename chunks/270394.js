n.d(t, {
    Z: function () {
        return P;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(512722),
    s = n.n(o),
    d = n(392711),
    c = n.n(d),
    u = n(399606),
    m = n(692547),
    h = n(481060),
    p = n(447543),
    g = n(225433),
    x = n(129861),
    f = n(493544),
    b = n(700582),
    v = n(410030),
    C = n(933557),
    N = n(346486),
    I = n(600164),
    j = n(666657),
    T = n(487419),
    _ = n(664452),
    Z = n(560114),
    E = n(699516),
    S = n(594174),
    y = n(965638),
    A = n(981631),
    R = n(388032),
    L = n(170465),
    k = n(684309),
    O = n(232186);
let w = {
    INVITER: 3,
    INVITE_CODE: 3,
    USES: 1,
    EXPIRES: 2
};
function M(e) {
    var t, n;
    let { invite: l, showChannel: r = !1, inviteDisabled: o = !1, hide: s = !1 } = e,
        d = l.uses;
    return (
        l.maxUses > 0 && (d = ''.concat(l.uses, '/').concat(l.maxUses)),
        (0, i.jsxs)(I.Z, {
            className: a()(L.inviteSettingsInviteRow, k.card, { [L.inviteDisabledRow]: o }),
            children: [
                (0, i.jsx)(I.Z, {
                    grow: w.INVITER,
                    basis: 0,
                    align: I.Z.Align.CENTER,
                    className: a()(L.text),
                    children: (0, i.jsxs)(I.Z.Child, {
                        children: [
                            null == (t = l.inviter)
                                ? null
                                : (0, i.jsxs)('div', {
                                      className: L.user,
                                      children: [
                                          (0, i.jsx)(b.Z, {
                                              user: t,
                                              size: h.AvatarSizes.SIZE_20,
                                              className: L.avatar
                                          }),
                                          (0, i.jsx)(x.Z, {
                                              className: L.username,
                                              discriminatorClass: L.discriminator,
                                              user: t
                                          })
                                      ]
                                  }),
                            ((n = l.channel),
                            r
                                ? (0, i.jsx)(h.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: (0, C.F6)(n, S.default, E.Z, !0)
                                  })
                                : null)
                        ]
                    })
                }),
                (0, i.jsx)(I.Z, {
                    grow: w.INVITE_CODE,
                    shrink: 1,
                    basis: 0,
                    align: I.Z.Align.CENTER,
                    className: L.text,
                    children: (0, i.jsx)(h.Text, {
                        className: L.inviteCode,
                        variant: 'text-sm/normal',
                        children: s ? '...' : l.code
                    })
                }),
                (0, i.jsx)(I.Z, {
                    grow: w.USES,
                    basis: 0,
                    justify: I.Z.Justify.END,
                    align: I.Z.Align.CENTER,
                    className: a()(L.text),
                    children: (0, i.jsx)(h.Text, {
                        className: L.uses,
                        variant: 'text-sm/normal',
                        children: d
                    })
                }),
                (0, i.jsx)(I.Z, {
                    grow: w.EXPIRES,
                    basis: 0,
                    align: I.Z.Align.CENTER,
                    justify: I.Z.Justify.END,
                    className: a()(L.text, L.countdownColumn),
                    children: (0, i.jsx)(h.Text, {
                        className: L.countdown,
                        variant: 'text-sm/normal',
                        children: (0, i.jsx)(N.Z, { deadline: l.getExpiresAt() })
                    })
                }),
                (0, i.jsx)(g.Z, {
                    className: L.revokeInvite,
                    onClick: () => {
                        p.Z.revokeInvite(l);
                    }
                })
            ]
        })
    );
}
function P(e) {
    let { invites: t, guild: r, hide: a, channel: o = null, showChannel: d = !1, loading: p = !1, canCreateInvites: g = !1 } = e;
    s()(null != r, 'guild is required');
    let x = (0, y.M)(r),
        b = (0, u.e7)([T.Z], () => T.Z.getGuildIncident(r.id)),
        C = r.hasFeature(A.oNc.INVITES_DISABLED) || ((null == b ? void 0 : b.invitesDisabledUntil) != null && new Date(b.invitesDisabledUntil) > new Date()),
        N = (0, v.ZP)(),
        E = l.useMemo(
            () =>
                null == t || p
                    ? []
                    : c()(t)
                          .sortBy((e) => {
                              var t, n;
                              return (null !== (n = null === (t = e.inviter) || void 0 === t ? void 0 : t.username) && void 0 !== n ? n : '').toLowerCase();
                          })
                          .value(),
            [t, p]
        ),
        S = () => {
            (0, h.openModalLazy)(
                async () => (e) =>
                    (0, i.jsx)(Z.default, {
                        ...e,
                        channel: o,
                        guild: r,
                        source: A.t4x.SETTINGS_INVITE
                    })
            );
        },
        k = () => {
            let e = { source: j.Zu.GUILD_SETTINGS };
            (0, h.openModalLazy)(
                async () => (t) =>
                    (0, i.jsx)(_.default, {
                        ...t,
                        guildId: r.id,
                        analyticsData: e
                    })
            );
        };
    return (0, i.jsx)(f.Xi, {
        sections: [Math.max(1, E.length)],
        renderSection: () => {
            let e;
            return (
                (e =
                    0 !== E.length || p
                        ? (0, i.jsxs)(I.Z, {
                              children: [
                                  (0, i.jsx)(I.Z.Child, {
                                      grow: w.INVITER,
                                      basis: 0,
                                      className: O.marginReset,
                                      children: (0, i.jsx)(h.FormTitle, { children: R.intl.string(R.t.EgHyKy) })
                                  }),
                                  (0, i.jsx)(I.Z.Child, {
                                      basis: 0,
                                      grow: w.INVITE_CODE,
                                      className: O.marginReset,
                                      children: (0, i.jsx)(h.FormTitle, { children: R.intl.string(R.t.LBlFEB) })
                                  }),
                                  (0, i.jsx)(I.Z.Child, {
                                      grow: w.USES,
                                      basis: 0,
                                      className: L.textAlignRight,
                                      children: (0, i.jsx)(h.FormTitle, { children: R.intl.string(R.t.erWrmJ) })
                                  }),
                                  (0, i.jsx)(I.Z.Child, {
                                      grow: w.EXPIRES,
                                      basis: 0,
                                      className: L.textAlignRight,
                                      children: (0, i.jsx)(h.FormTitle, { children: R.intl.string(R.t['1aM27e']) })
                                  })
                              ]
                          })
                        : (0, i.jsxs)(h.EmptyState, {
                              theme: N,
                              children: [
                                  (0, i.jsx)(h.EmptyStateImage, {
                                      darkSrc: n(914814),
                                      lightSrc: n(370392),
                                      width: 256,
                                      height: 130
                                  }),
                                  (0, i.jsx)(h.EmptyStateText, {
                                      note: R.intl.string(R.t.F53CAQ),
                                      children: R.intl.string(R.t['+nLJkZ'])
                                  })
                              ]
                          })),
                (0, i.jsx)(
                    h.FormSection,
                    {
                        className: L.headerSection,
                        children: (0, i.jsxs)(h.HeadingLevel, {
                            component: (0, i.jsx)(h.FormTitle, {
                                tag: h.FormTitleTags.H1,
                                children: R.intl.string(R.t['9F90iY'])
                            }),
                            children: [
                                (0, i.jsx)(h.FormText, {
                                    className: O.marginBottom20,
                                    type: h.FormTextTypes.DESCRIPTION,
                                    children: g ? R.intl.format(R.t['97VdNj'], { onCreateInvite: S }) : R.intl.string(R.t.WDw38P)
                                }),
                                (0, i.jsxs)('div', {
                                    className: L.inviteDisabledContainer,
                                    children: [
                                        (0, i.jsx)(h.Button, {
                                            size: h.Button.Sizes.SMALL,
                                            color: C ? h.Button.Colors.BRAND : h.Button.Colors.RED,
                                            disabled: !x,
                                            onClick: k,
                                            children: C ? R.intl.string(R.t['/dbw3N']) : R.intl.string(R.t.Uwsjn5)
                                        }),
                                        C &&
                                            (0, i.jsxs)('div', {
                                                className: L.inviteDisabledTip,
                                                children: [
                                                    (0, i.jsx)(h.CircleWarningIcon, {
                                                        size: 'custom',
                                                        width: 20,
                                                        height: 20,
                                                        color: m.Z.unsafe_rawColors.YELLOW_300.css
                                                    }),
                                                    (0, i.jsx)(h.Text, {
                                                        variant: 'text-sm/normal',
                                                        children: R.intl.string(R.t['2LLbj4'])
                                                    })
                                                ]
                                            })
                                    ]
                                }),
                                (0, i.jsx)(h.FormDivider, { className: L.headerDivider }),
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
            if (0 === E.length && 0 === n && p)
                return (0, i.jsx)(
                    h.Spinner,
                    {
                        className: O.marginTop20,
                        type: h.Spinner.Type.SPINNING_CIRCLE
                    },
                    'spinner'
                );
            if (t > 0) return null;
            let l = E[n];
            return null == l
                ? null
                : (0, i.jsx)(
                      M,
                      {
                          hide: a,
                          invite: l,
                          showChannel: d,
                          inviteDisabled: C
                      },
                      l.code
                  );
        },
        rowHeight: (e, t) => (e > 0 ? 0 : 0 === E.length && 0 === t && p ? 62 : null != E[t] ? 62 : 0),
        sectionHeight: () => (0 !== E.length || p ? 120 : 344)
    });
}
