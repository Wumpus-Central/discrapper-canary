(n.d(t, {
    $B: () => L,
    Cx: () => w,
    EF: () => j,
    Ii: () => U,
    K4: () => k,
    ME: () => F,
    MJ: () => G,
    N3: () => R,
    NO: () => M,
    Pp: () => W,
    V1: () => Y,
    X2: () => x,
    Z$: () => v,
    b7: () => b,
    fl: () => P,
    hX: () => H,
    kF: () => V,
    lq: () => y,
    sw: () => B,
    u8: () => D,
}),
    n(321073));
var i = n(487899),
    r = n(991690),
    a = n(157559),
    s = n(148494),
    l = n(155718),
    o = n(847381),
    d = n(264322),
    c = n(392054),
    u = n(168186),
    _ = n(545152),
    E = n(20015),
    A = n(204776),
    h = n(878014),
    I = n(451909),
    f = n(395671),
    p = n(486020),
    T = n(723702),
    m = n(989837),
    g = n(500049),
    S = n(652215),
    N = n(73510),
    C = n(381941),
    O = n(375708);
let R = { id: N.Ik.BUILT_IN };
function L(e) {
    return e.id !== N.Ik.BUILT_IN;
}
function y(e) {
    return L(e) ? e.name : O.intl.string(O.t.UB2gG2);
}
function D(e) {
    return L(e) ? e.description : O.intl.string(O.t.X9fusn);
}
function v(e) {
    return L(e) && (0, h.W)(e, r.U.MAIN);
}
function b(e) {
    return L(e) && (0, E.n)(e, S.gfo.PARTNER);
}
function M(e) {
    return L(e) && (0, E.n)(e, S.gfo.PROMOTED);
}
function P(e) {
    let t = w(e),
        n = t?.client_platform_config[(0, o.A)((0, T.getOS)())],
        i = Date.now();
    return n?.label_until != null &&
        i < Date.parse(n.label_until) &&
        n?.label_from != null &&
        i > Date.parse(n.label_from)
        ? (n?.label_type ?? l.Hr.NONE)
        : l.Hr.NONE;
}
function U(e) {
    switch (P(e)) {
        case l.Hr.NEW:
            return "New";
        case l.Hr.UPDATED:
            return "Updated";
        default:
            return "";
    }
}
function w(e) {
    return L(e) && v(e) ? (e instanceof f.Ay ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
function G(e) {
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
                    source: m.A.entrypoint(),
                });
                if (t.inputType === c.y$.BUILT_IN_TEXT && null != e && null != i.channel) {
                    let t = I.Ay.parse(u, e.content);
                    ((t.tts = e.tts ?? !1), s.A.sendMessage(i.channel.id, t, !0, { location: C.Hx.APP_COMMAND }));
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
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: n, ...i } = t;
    return L(e)
        ? {
              iconURL: p.Ay.getApplicationIconURL({ ...i, id: e.id, icon: e.icon }),
              name: e.name,
              description: e.description,
          }
        : { iconURL: n ?? null, name: O.intl.string(O.t.UB2gG2), description: O.intl.string(O.t.X9fusn) };
}
function k(e) {
    return !!L(e) && (e instanceof f.Ay ? e.isMonetized : e.is_monetized);
}
function F(e) {
    let t = w(e);
    return null != t && t.displays_advertisements;
}
function B(e) {
    return e === g.s4.TEXT;
}
function V(e) {
    return null == e ? "" : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll("_", " ");
}
function H(e) {
    let t = [];
    for (let n of e) {
        let e = n.application_directory_collection_items.filter((e) => e.type === i.L.APPLICATION && v(e.application));
        0 !== e.length && t.push({ ...n, application_directory_collection_items: e });
    }
    return t;
}
function j(e) {
    return {
        applicationId: e.id,
        customInstallUrl: e.customInstallUrl,
        installParams: e.installParams,
        integrationTypesConfig: e.integrationTypesConfig,
    };
}
function W(e) {
    return e instanceof f.Ay
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
}
function Y(e, t) {
    let n = null != t ? d.Ay.getGuildState(t) : null,
        i = null != n && (0, u.gI)(e.id, n);
    return (0, A.Kp)(e) || i;
}
