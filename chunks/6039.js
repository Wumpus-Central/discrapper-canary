n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(568154),
    o = n(703656),
    c = n(430824),
    d = n(449934),
    u = n(768581),
    h = n(693546),
    m = n(863249),
    p = n(944163),
    g = n(63568),
    f = n(246364),
    _ = n(937111),
    E = n(523924),
    I = n(390500),
    C = n(200305),
    v = n(577809),
    N = n(981631),
    T = n(898625),
    S = n(388032),
    b = n(301219);
t.Z = (e) => {
    var t;
    let n, A;
    let { guildId: Z, inviteCode: x } = e,
        L = (0, g.jS)(Z, 'MemberVerificationPreviewDisabled'),
        [y, P] = r.useState(T.hO.INITIAL),
        O = (0, l.e7)([p.Z], () => p.Z.get(Z)),
        R = (0, l.e7)([_.Z], () => _.Z.getRequest(Z)),
        j = (0, l.e7)([c.Z], () => c.Z.getGuild(Z)),
        { hasFetchedRequestToJoinGuilds: D, guildPreviewDisabled: M } = (0, l.cj)([_.Z], () => ({
            hasFetchedRequestToJoinGuilds: _.Z.hasFetchedRequestToJoinGuilds,
            guildPreviewDisabled: _.Z.getJoinRequestGuild(Z)
        }));
    r.useEffect(() => {
        null != j && (0, o.uL)(N.Z5c.CHANNEL(Z));
    }, [j, Z]),
        r.useEffect(() => {
            !D && h.Z.fetchRequestToJoinGuilds();
        }, [D]);
    let w = r.useCallback((e) => {
            P((t) => Math.max(t, e));
        }, []),
        k = async (e) => {
            await m.ZP.submitVerificationForm(Z, e);
        },
        U = () => {
            h.Z.resetGuildJoinRequest(Z);
        };
    let G =
        ((n = S.intl.format(S.t['9ZezpK'], { name: null == M ? void 0 : M.toString() })),
        (A = () => {
            P(Math.max(y, T.hO.FILLING)), h.Z.removeGuildJoinRequest(Z), (0, o.uL)(N.Z5c.ME);
        }),
        () => {
            (0, a.openModal)((e) =>
                (0, i.jsx)(a.ConfirmModal, {
                    header: S.intl.string(S.t.y0CVen),
                    cancelText: S.intl.string(S.t.oEAioK),
                    onConfirm: A,
                    confirmText: S.intl.string(S.t.p89ACg),
                    confirmButtonColor: a.Button.Colors.RED,
                    ...e,
                    children: (0, i.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: n
                    })
                })
            );
        });
    if (L && (null == R ? void 0 : R.applicationStatus) !== f.wB.SUBMITTED && (null == R ? void 0 : R.applicationStatus) !== f.wB.REJECTED)
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', { className: b.dragRegion }),
                (0, i.jsx)('div', {
                    className: b.v2ContentWrapper,
                    children: (0, i.jsx)(v.Z, {
                        guildId: Z,
                        inviteCode: x,
                        onComplete: k
                    })
                })
            ]
        });
    let B =
        (null == O ? void 0 : null === (t = O.guild) || void 0 === t ? void 0 : t.splash) != null
            ? u.ZP.getGuildSplashURL({
                  id: O.guild.id,
                  splash: O.guild.splash
              })
            : (0, d.gK)();
    return (0, i.jsx)('div', {
        className: b.page,
        children: (0, i.jsxs)(s.Z, {
            embedded: !0,
            splash: B,
            waveState: y,
            showLogo: !1,
            updateWaveState: w,
            children: [
                (0, i.jsx)('div', { className: b.dragRegion }),
                (0, i.jsx)('div', {
                    className: b.contentWrapper,
                    children: (() => {
                        switch (null == R ? void 0 : R.applicationStatus) {
                            case f.wB.SUBMITTED:
                                return (0, i.jsx)(I.Z, {
                                    onWithdrawApplication: G,
                                    guild: M
                                });
                            case f.wB.REJECTED:
                                return (0, i.jsx)(E.Z, {
                                    reapplyText: S.intl.string(S.t.I1LYVl),
                                    onReapply: U,
                                    confirmText: S.intl.string(S.t.mqtdmZ),
                                    onWithdrawApplication: G,
                                    rejectionReason: null == R ? void 0 : R.rejectionReason,
                                    guild: M
                                });
                            default:
                                return (0, i.jsx)(C.Z, {
                                    guildId: Z,
                                    inviteCode: x,
                                    onComplete: k
                                });
                        }
                    })()
                })
            ]
        })
    });
};
