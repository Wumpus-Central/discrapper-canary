var r = n(855986),
    s = n(73153);
let o = new Map();
class i extends r.Ay.Store {
    getPrompt(e) {
        return o.get(e) ?? null;
    }
}
let l = new i(s.h, {
        CONJURE_PREVIEW_ADD_BOT_PROMPT_SET(e) {
            let { projectId: t, prompt: n } = e;
            return (o.get(t)?.id ?? null) !== (n?.id ?? null) && (null == n ? o.delete(t) : o.set(t, n), !0);
        },
    }),
    a = 221552 == n.j ? l : null;
n.d(t, {}, { A: a });
