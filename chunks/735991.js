"use strict";
n.d(t, {
    $B: () => R,
    Ag: () => y,
    Cx: () => P,
    EF: () => B,
    Ii: () => M,
    K4: () => G,
    ME: () => x,
    MJ: () => U,
    N3: () => C,
    NO: () => v,
    Pp: () => H,
    V1: () => j,
    X2: () => w,
    b7: () => D,
    fl: () => b,
    hX: () => V,
    kF: () => F,
    lq: () => O,
    sw: () => k,
    u8: () => L,
}),
    n(321073);
var i = n(487899),
    r = n(157559),
    a = n(148494),
    s = n(155718),
    l = n(847381),
    o = n(264322),
    d = n(392054),
    c = n(168186),
    u = n(545152),
    _ = n(20015),
    E = n(204776),
    A = n(451909),
    h = n(395671),
    I = n(486020),
    f = n(723702),
    p = n(989837),
    T = n(500049),
    m = n(652215),
    g = n(73510),
    S = n(381941),
    N = n(375708);
let C = { id: g.Ik.BUILT_IN };
function R(e) {
    return e.id !== g.Ik.BUILT_IN;
}
function O(e) {
    return R(e) ? e.name : N.intl.string(N.t.UB2gG2);
}
function L(e) {
    return R(e) ? e.description : N.intl.string(N.t.X9fusn);
}
function y(e) {
    return R(e) && (0, _.n)(e, m.gfo.EMBEDDED);
}
function D(e) {
    return R(e) && (0, _.n)(e, m.gfo.PARTNER);
}
function v(e) {
    return R(e) && (0, _.n)(e, m.gfo.PROMOTED);
}
function b(e) {
    let t = P(e),
        n = t?.client_platform_config[(0, l.A)((0, f.getOS)())],
        i = Date.now();
    return n?.label_until != null &&
        i < Date.parse(n.label_until) &&
        n?.label_from != null &&
        i > Date.parse(n.label_from)
        ? (n?.label_type ?? s.Hr.NONE)
        : s.Hr.NONE;
}
function M(e) {
    switch (b(e)) {
        case s.Hr.NEW:
            return "New";
        case s.Hr.UPDATED:
            return "Updated";
        default:
            return "";
    }
}
function P(e) {
    return R(e) && y(e) ? (e instanceof h.Ay ? e.embeddedActivityConfig : e.embedded_activity_config) : null;
}
function U(e) {
    let {
            command: t,
            optionValues: n,
            context: i,
            commandTargetId: s,
            maxSizeCallback: l,
            sectionName: o,
            commandOrigin: c = d.iw.APPLICATION_LAUNCHER,
        } = e,
        { channel: _ } = i,
        E = async () => {
            try {
                let e = await (0, u.A)({
                    command: t,
                    optionValues: n,
                    context: i,
                    commandTargetId: s,
                    maxSizeCallback: l,
                    commandOrigin: c,
                    sectionName: o,
                    source: p.A.entrypoint(),
                });
                if (t.inputType === d.y$.BUILT_IN_TEXT && null != e && null != i.channel) {
                    let t = A.Ay.parse(_, e.content);
                    (t.tts = e.tts ?? !1), a.A.sendMessage(i.channel.id, t, !0, { location: S.Hx.APP_COMMAND });
                }
            } catch (e) {
                throw (
                    (r.A.show({
                        title: N.intl.string(N.t["aHO//m"]),
                        body: N.intl.string(N.t.kuzKHK),
                        confirmText: N.intl.string(N.t["5911Lb"]),
                        onConfirm: () => E(),
                    }),
                    e)
                );
            }
        };
    return E();
}
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { fakeAppIconURL: n, ...i } = t;
    return R(e)
        ? {
              iconURL: I.Ay.getApplicationIconURL({ ...i, id: e.id, icon: e.icon }),
              name: e.name,
              description: e.description,
          }
        : { iconURL: n ?? null, name: N.intl.string(N.t.UB2gG2), description: N.intl.string(N.t.X9fusn) };
}
function G(e) {
    return !!R(e) && (e instanceof h.Ay ? e.isMonetized : e.is_monetized);
}
function x(e) {
    let t = P(e);
    return null != t && t.displays_advertisements;
}
function k(e) {
    return e === T.s4.TEXT;
}
function F(e) {
    return null == e ? "" : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll("_", " ");
}
function V(e) {
    let t = [];
    for (let n of e) {
        let e = n.application_directory_collection_items.filter((e) => e.type === i.L.APPLICATION && y(e.application));
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
function H(e) {
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
function j(e, t) {
    let n = null != t ? o.Ay.getGuildState(t) : null,
        i = null != n && (0, c.gI)(e.id, n);
    return (0, E.Kp)(e) || i;
}
