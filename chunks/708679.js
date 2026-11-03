n.d(t, { EP: () => N, Iy: () => E, JN: () => T, P6: () => U, RW: () => _, XU: () => S, YI: () => k, yN: () => O });
var r = n(636537),
    l = n(506774),
    a = n(73153),
    i = n(195880),
    s = n(347111),
    o = n(805942),
    c = n(89222),
    u = n(287111),
    d = n(322227),
    f = n(975189),
    m = n(371169),
    p = n(260498),
    h = n(652215),
    g = n(809526),
    x = n(105292);
let j = "ConjureHeldPrompts",
    b = new Map(),
    v = new Map();
function y(e, t) {
    let n =
        b.get(e) ??
        (async () => {
            try {
                await t();
            } catch (t) {
                throw (b.delete(e), t);
            }
        })();
    return (b.set(e, n), n);
}
function w() {
    return l.w.get(j) ?? {};
}
function C(e) {
    let { [e]: t, ...n } = w();
    l.w.set(j, n);
}
function N(e) {
    return w()[e]?.guildId;
}
function U(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (p.Ay.getProject(e)?.install_scope_setup != null)
        l.w.set(j, { ...w(), [e]: { message: t, attachments: n, nonce: (0, i.m)(), guildId: r } });
    else (0, d.sendUserMessage)(e, t, n);
}
function R(e, t, n) {
    (C(e),
        (0, d.withdrawUserMessage)(e, t.nonce),
        "" === c.A.getDraft(e) && (0, s.I)(e, t.message),
        0 === (0, u.GU)(e, "chat").length &&
            (0, u.fD)(
                e,
                "chat",
                t.attachments.map((e) => ({
                    draft: { name: e.name, contentType: e.content_type, status: "ready", ref: e },
                })),
            ),
        n());
}
function E(e, t) {
    let n = w()[e],
        r = p.Ay.getProject(e);
    if (null == n || null == r || !o.A.hasLoadedHistory(e)) return;
    let a = o.A.getMessages(e),
        i = (0, d.optimisticMessageId)(n.nonce);
    if (!0 === n.sent) {
        let l = a.some((e) => "user" === e.role && !0 !== e.held && e.id !== i && e.content === n.message),
            s = o.A.getHistoryLoads(e) > (v.get(e) ?? 0);
        l
            ? C(e)
            : !s || null != r.install_scope_setup || o.A.isHistoryUnavailable(e) || o.A.isThinking(e) || R(e, n, t);
        return;
    }
    if (null != r.install_scope_setup) {
        a.some((e) => e.id === i) || (0, d.showUserMessage)(e, n.message, n.attachments, { held: !0, nonce: n.nonce });
        return;
    }
    "open" === d.default.getConnState(e) &&
        (l.w.set(j, { ...w(), [e]: { ...n, sent: !0 } }),
        v.set(e, o.A.getHistoryLoads(e)),
        (0, d.sendUserMessage)(e, n.message, n.attachments, { nonce: n.nonce }) || R(e, n, t));
}
function S(e, t) {
    if (0 === e.length) return {};
    let n = e.find((e) => e.id === t);
    return {
        input: "server",
        note: x.intl.string(g.default.SU9K9U),
        ...(null != n ? { default_entities: [{ id: n.id, name: n.name, kind: "server" }] } : {}),
    };
}
function k(e) {
    return {
        id: e.id,
        questions: e.questions.map((e) => ({
            id: e.id,
            question: e.question,
            recommendation_reason: "",
            options: [],
            allow_custom: !1,
            note: x.intl.string(g.default.ZKPaWY),
        })),
    };
}
async function A(e, t, n) {
    let l = await r.Bo.put({
        url: `${h.Rsh.CONJURE_PROJECT(e)}/install-scope`,
        body: { install_scope: t, ...(null != n ? { guild_id: n } : {}) },
        rejectWithError: !0,
    });
    a.h.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: l.body });
}
function T(e, t, n) {
    return y(`settle:${e}`, async () => {
        try {
            await A(e, t, n);
        } catch (t) {
            if (409 !== t.status) throw t;
            await (0, m.U1)(e);
        }
    });
}
function O(e, t, n, r) {
    return y(`switch:${e}:${t}`, async () => {
        await A(e, n, r);
        let t = "guild" === n ? g.default["8+EcCu"] : g.default["U7+Yeh"];
        if (!(0, d.sendUserMessage)(e, x.intl.string(t))) throw Error("Not connected");
    });
}
function _(e) {
    return (0, f.b4)(e, "keep install scope", (e) => e.sendKeepInstallScope());
}
