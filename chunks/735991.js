n(321073);
var i = n(487899),
    r = n(991690),
    a = n(157559),
    s = n(138399),
    l = n(155718),
    o = n(847381),
    d = n(264322),
    c = n(392054),
    u = n(168186),
    _ = n(545152),
    E = n(20015),
    A = n(204776),
    f = n(878014),
    h = n(451909),
    I = n(327891),
    p = n(486020),
    m = n(723702),
    T = n(989837),
    g = n(500049),
    S = n(652215),
    N = n(73510),
    C = n(381941),
    O = n(792996);
let R = { id: N.Ik.BUILT_IN };
function L(e) {
    return e.id !== N.Ik.BUILT_IN;
}
function y(e) {
    return L(e) && (0, f.W)(e, r.U.MAIN);
}
function D(e) {
    let t = b(e),
        n = t?.client_platform_config[(0, o.A)((0, m.R0)())],
        i = Date.now();
    return n?.label_until != null &&
        i < Date.parse(n.label_until) &&
        n?.label_from != null &&
        i > Date.parse(n.label_from)
        ? (n?.label_type ?? l.Hr.NONE)
        : l.Hr.NONE;
}
function b(e) {
    return L(e) && y(e) ? (e instanceof I.Ay ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
n.d(
    t,
    {},
    {
        $B: L,
        Cx: b,
        EF: function (e) {
            return {
                applicationId: e.id,
                customInstallUrl: e.customInstallUrl,
                installParams: e.installParams,
                integrationTypesConfig: e.integrationTypesConfig,
            };
        },
        Ii: function (e) {
            switch (D(e)) {
                case l.Hr.NEW:
                    return "New";
                case l.Hr.UPDATED:
                    return "Updated";
                default:
                    return "";
            }
        },
        K4: function (e) {
            return !!L(e) && (e instanceof I.Ay ? e.isMonetized : e.is_monetized);
        },
        ME: function (e) {
            let t = b(e);
            return null != t && t.displays_advertisements;
        },
        MJ: function (e) {
            let {
                    command: t,
                    optionValues: n,
                    context: i,
                    commandTargetId: r,
                    maxSizeCallback: l,
                    sectionName: o,
                    commandOrigin: d = c.iw.APPLICATION_LAUNCHER,
                } = e,
                { channel: u } = i,
                E = async () => {
                    try {
                        let e = await (0, _.A)({
                            command: t,
                            optionValues: n,
                            context: i,
                            commandTargetId: r,
                            maxSizeCallback: l,
                            commandOrigin: d,
                            sectionName: o,
                            source: T.A.entrypoint(),
                        });
                        if (t.inputType === c.y$.BUILT_IN_TEXT && null != e && null != i.channel) {
                            let t = h.Ay.parse(u, e.content);
                            ((t.tts = e.tts ?? !1),
                                s.A.sendMessage(i.channel.id, t, !0, { location: C.Hx.APP_COMMAND }));
                        }
                    } catch (e) {
                        throw (
                            a.A.show({
                                title: O.intl.string(O.t["aHO//m"]),
                                body: O.intl.string(O.t.kuzKHK),
                                confirmText: O.intl.string(O.t["5911Lb"]),
                                onConfirm: () => E(),
                                isDismissable: !1,
                            }),
                            e
                        );
                    }
                };
            return E();
        },
        N3: R,
        NO: function (e) {
            return L(e) && (0, E.n)(e, S.gfo.PROMOTED);
        },
        Pp: function (e) {
            return e instanceof I.Ay
                ? {
                      applicationId: e.id,
                      customInstallUrl: e.customInstallUrl,
                      installParams: e.installParams,
                      integrationTypesConfig: e.integrationTypesConfig,
                  }
                : {
                      applicationId: e.id,
                      customInstallUrl: e.custom_install_url,
                      installParams: e.install_params,
                      integrationTypesConfig: e.integration_types_config,
                  };
        },
        V1: function (e, t) {
            let n = null != t ? d.Ay.getGuildState(t) : null,
                i = null != n && (0, u.gI)(e.id, n);
            return (0, A.Kp)(e) || i;
        },
        X2: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { fakeAppIconURL: n, ...i } = t;
            return L(e)
                ? {
                      iconURL: p.Ay.getApplicationIconURL({ ...i, id: e.id, icon: e.icon }),
                      name: e.name,
                      description: e.description,
                  }
                : { iconURL: n ?? null, name: O.intl.string(O.t.UB2gG2), description: O.intl.string(O.t.X9fusn) };
        },
        Z$: y,
        b7: function (e) {
            return L(e) && (0, E.n)(e, S.gfo.PARTNER);
        },
        fl: D,
        hX: function (e) {
            let t = [];
            for (let n of e) {
                let e = n.application_directory_collection_items.filter(
                    (e) => e.type === i.L.APPLICATION && y(e.application),
                );
                0 !== e.length && t.push({ ...n, application_directory_collection_items: e });
            }
            return t;
        },
        kF: function (e) {
            return null == e ? "" : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll("_", " ");
        },
        lq: function (e) {
            return L(e) ? e.name : O.intl.string(O.t.UB2gG2);
        },
        sw: function (e) {
            return e === g.s4.TEXT;
        },
        u8: function (e) {
            return L(e) ? e.description : O.intl.string(O.t.X9fusn);
        },
        vW: function (e, t) {
            return null == e.icon && ((e instanceof I.Ay ? e.conjureProjectId : e.conjure_project_id) ?? t) != null;
        },
    },
);
