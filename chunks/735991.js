"use strict";
n.d(t, {
    $B: () => N,
    Ag: () => O,
    Cx: () => M,
    EF: () => B,
    Ii: () => w,
    K4: () => k,
    ME: () => U,
    MJ: () => P,
    N3: () => C,
    NO: () => D,
    Pp: () => j,
    V1: () => H,
    X2: () => x,
    b7: () => b,
    fl: () => L,
    hX: () => V,
    kF: () => F,
    lq: () => v,
    sw: () => G,
    u8: () => R,
}),
    n(321073);
var i = n(487899),
    r = n(157559),
    s = n(720149),
    a = n(155718),
    o = n(847381),
    l = n(264322),
    u = n(392054),
    c = n(168186),
    d = n(545152),
    _ = n(20015),
    h = n(204776),
    f = n(451909),
    p = n(395671),
    E = n(486020),
    m = n(723702),
    g = n(989837),
    A = n(500049),
    I = n(652215),
    T = n(73510),
    S = n(381941),
    y = n(375708);
let C = { id: T.Ik.BUILT_IN };
function N(e) {
    return e.id !== T.Ik.BUILT_IN;
}
function v(e) {
    return N(e) ? e.name : y.intl.string(y.t.UB2gG2);
}
function R(e) {
    return N(e) ? e.description : y.intl.string(y.t.X9fusn);
}
function O(e) {
    return N(e) && (0, _.n)(e, I.gfo.EMBEDDED);
}
function b(e) {
    return N(e) && (0, _.n)(e, I.gfo.PARTNER);
}
function D(e) {
    return N(e) && (0, _.n)(e, I.gfo.PROMOTED);
}
function L(e) {
    let t = M(e),
        n = t?.client_platform_config[(0, o.A)((0, m.getOS)())],
        i = Date.now();
    return n?.label_until != null &&
        i < Date.parse(n.label_until) &&
        n?.label_from != null &&
        i > Date.parse(n.label_from)
        ? (n?.label_type ?? a.Hr.NONE)
        : a.Hr.NONE;
}
function w(e) {
    switch (L(e)) {
        case a.Hr.NEW:
            return "New";
        case a.Hr.UPDATED:
            return "Updated";
        default:
            return "";
    }
}
function M(e) {
    return N(e) && O(e) ? (e instanceof p.Ay ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
function P(e) {
    let {
            command: t,
            optionValues: n,
            context: i,
            commandTargetId: a,
            maxSizeCallback: o,
            sectionName: l,
            commandOrigin: c = u.iw.APPLICATION_LAUNCHER,
        } = e,
        { channel: _ } = i,
        h = async () => {
            try {
                let e = await (0, d.A)({
                    command: t,
                    optionValues: n,
                    context: i,
                    commandTargetId: a,
                    maxSizeCallback: o,
                    commandOrigin: c,
                    sectionName: l,
                    source: g.A.entrypoint(),
                });
                if (t.inputType === u.y$.BUILT_IN_TEXT && null != e && null != i.channel) {
                    let t = f.Ay.parse(_, e.content);
                    (t.tts = e.tts ?? !1), s.A.sendMessage(i.channel.id, t, !0, { location: S.Hx.APP_COMMAND });
                }
            } catch (e) {
                throw (
                    (r.A.show({
                        title: y.intl.string(y.t["aHO//m"]),
                        body: y.intl.string(y.t.kuzKHK),
                        confirmText: y.intl.string(y.t["5911Lb"]),
                        onConfirm: () => h(),
                    }),
                    e)
                );
            }
        };
    return h();
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: n, ...i } = t;
    return N(e)
        ? {
              iconURL: E.Ay.getApplicationIconURL({ ...i, id: e.id, icon: e.icon }),
              name: e.name,
              description: e.description,
          }
        : { iconURL: n ?? null, name: y.intl.string(y.t.UB2gG2), description: y.intl.string(y.t.X9fusn) };
}
function k(e) {
    return !!N(e) && (e instanceof p.Ay ? e.isMonetized : e.is_monetized);
}
function U(e) {
    let t = M(e);
    return null != t && t.displays_advertisements;
}
function G(e) {
    return e === A.s4.TEXT;
}
function F(e) {
    return null == e ? "" : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll("_", " ");
}
function V(e) {
    let t = [];
    for (let n of e) {
        let e = n.application_directory_collection_items.filter((e) => e.type === i.L.APPLICATION && O(e.application));
        0 !== e.length && t.push({ ...n, application_directory_collection_items: e });
    }
    return t;
}
function B(e) {
    return {
        applicationId: e.id,
        customInstallUrl: e.customInstallUrl,
        installParams: e.installParams,
        integrationTypesConfig: e.integrationTypesConfig,
    };
}
function j(e) {
    return e instanceof p.Ay
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
function H(e, t) {
    let n = null != t ? l.Ay.getGuildState(t) : null,
        i = null != n && (0, c.gI)(e.id, n);
    return (0, h.Kp)(e) || i;
}
