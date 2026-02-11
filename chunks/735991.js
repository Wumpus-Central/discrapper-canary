"use strict";
n.d(t, {
    $B: () => C,
    Ag: () => R,
    Cx: () => x,
    EF: () => B,
    Ii: () => w,
    K4: () => k,
    ME: () => U,
    MJ: () => M,
    N3: () => v,
    NO: () => D,
    Pp: () => j,
    V1: () => H,
    X2: () => P,
    b7: () => O,
    fl: () => L,
    hX: () => V,
    kF: () => F,
    lq: () => N,
    sw: () => G,
    u8: () => b,
}),
    n(321073);
var r = n(487899),
    i = n(157559),
    a = n(843472),
    s = n(155718),
    o = n(847381),
    l = n(264322),
    u = n(392054),
    c = n(168186),
    d = n(545152),
    _ = n(20015),
    f = n(204776),
    p = n(451909),
    h = n(611010),
    m = n(486020),
    g = n(723702),
    E = n(989837),
    A = n(500049),
    I = n(652215),
    T = n(73510),
    S = n(381941),
    y = n(985018);
let v = { id: T.Ik.BUILT_IN };
function C(e) {
    return e.id !== T.Ik.BUILT_IN;
}
function N(e) {
    return C(e) ? e.name : y.intl.string(y.t.UB2gG2);
}
function b(e) {
    return C(e) ? e.description : y.intl.string(y.t.X9fusn);
}
function R(e) {
    return C(e) && (0, _.n)(e, I.gfo.EMBEDDED);
}
function O(e) {
    return C(e) && (0, _.n)(e, I.gfo.PARTNER);
}
function D(e) {
    return C(e) && (0, _.n)(e, I.gfo.PROMOTED);
}
function L(e) {
    let t = x(e),
        n = t?.client_platform_config[(0, o.A)((0, g.getOS)())],
        r = Date.now();
    return n?.label_until != null &&
        r < Date.parse(n.label_until) &&
        n?.label_from != null &&
        r > Date.parse(n.label_from)
        ? (n?.label_type ?? s.Hr.NONE)
        : s.Hr.NONE;
}
function w(e) {
    switch (L(e)) {
        case s.Hr.NEW:
            return "New";
        case s.Hr.UPDATED:
            return "Updated";
        default:
            return "";
    }
}
function x(e) {
    return C(e) && R(e) ? (e instanceof h.Ay ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
function M(e) {
    let {
            command: t,
            optionValues: n,
            context: r,
            commandTargetId: s,
            maxSizeCallback: o,
            sectionName: l,
            commandOrigin: c = u.iw.APPLICATION_LAUNCHER,
        } = e,
        { channel: _ } = r,
        f = async () => {
            try {
                let e = await (0, d.A)({
                    command: t,
                    optionValues: n,
                    context: r,
                    commandTargetId: s,
                    maxSizeCallback: o,
                    commandOrigin: c,
                    sectionName: l,
                    source: E.A.entrypoint(),
                });
                if (t.inputType === u.y$.BUILT_IN_TEXT && null != e && null != r.channel) {
                    let t = p.Ay.parse(_, e.content);
                    (t.tts = e.tts ?? !1), a.A.sendMessage(r.channel.id, t, !0, { location: S.Hx.APP_COMMAND });
                }
            } catch (e) {
                throw (
                    (i.A.show({
                        title: y.intl.string(y.t["aHO//m"]),
                        body: y.intl.string(y.t.kuzKHK),
                        confirmText: y.intl.string(y.t["5911Lb"]),
                        onConfirm: () => f(),
                    }),
                    e)
                );
            }
        };
    return f();
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: n, ...r } = t;
    return C(e)
        ? {
              iconURL: m.Ay.getApplicationIconURL({ ...r, id: e.id, icon: e.icon }),
              name: e.name,
              description: e.description,
          }
        : { iconURL: n ?? null, name: y.intl.string(y.t.UB2gG2), description: y.intl.string(y.t.X9fusn) };
}
function k(e) {
    return !!C(e) && (e instanceof h.Ay ? e.isMonetized : e.is_monetized);
}
function U(e) {
    let t = x(e);
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
        let e = n.application_directory_collection_items.filter((e) => e.type === r.L.APPLICATION && R(e.application));
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
    return e instanceof h.Ay
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
        r = null != n && (0, c.gI)(e.id, n);
    return (0, f.Kp)(e) || r;
}
