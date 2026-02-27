"use strict";
n.d(t, { A: () => A });
var r = n(64700),
    i = n(27867),
    s = n(311907),
    a = n(258363),
    o = n(861382),
    l = n(355622),
    u = n(711371),
    c = n(696451),
    d = n(576705),
    _ = n(351906),
    f = n(287809),
    p = n(31498),
    h = n(986719),
    m = n(652215),
    E = n(307731);
let g = { thread: new Set(["name"]) };
function A(e, t, n) {
    let { channel: A, type: I } = e,
        [T, S] = r.useState(() => (0, p.Ur)()),
        y = (0, i.A)(),
        v = (0, s.bG)([c.Ay, f.default], () => {
            let e = f.default.getCurrentUser();
            return (null != A.guild_id && null != e ? c.Ay.getMember(A.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canMentionEveryone: N, hidePersonalInformation: C } = (0, s.cf)(
            [d.A, _.A],
            () => ({
                canMentionEveryone: A.isPrivate() || v || I === l.oU.RULES_INPUT || d.A.can(m.xBc.MENTION_EVERYONE, A),
                hidePersonalInformation: _.A.hidePersonalInformation,
            }),
            [A, I, v],
        ),
        { activeCommand: b, activeCommandOption: R } = (0, s.cf)([o.A], () => ({
            activeCommand: o.A.getActiveCommand(A.id),
            activeCommandOption: o.A.getActiveOption(A.id),
        })),
        O = r.useMemo(
            () =>
                b?.untranslatedName != null &&
                R?.name != null &&
                null != g[b.untranslatedName] &&
                g[b.untranslatedName].has(R.name),
            [b?.untranslatedName, R?.name],
        ),
        D = (0, h.A)({
            navId: "channel-autocomplete",
            scrollerRef: n,
            state: T,
            onFocus: (e) => P.setSelectedIndex(e),
        }),
        L = e.editorRef.current?.getCurrentWord(),
        w = e.editorRef.current?.getSlateEditor(),
        x = null;
    null != w && (x = u.VW.getSelectedParentOfType(w, p.mk)?.[0] ?? null);
    let M = {
            ...e,
            navigator: D,
            activeCommand: b,
            activeCommandOption: R,
            activeInlineAutocompleteInput: x,
            canMentionUsers: I.users?.allowMentioning ?? !1,
            canMentionEveryone: N,
            hidePersonalInformation: C,
            hideMentionDescription: I === l.oU.RULES_INPUT,
            emojiIntention: I === l.oU.RULES_INPUT ? E.b_.COMMUNITY_CONTENT : O ? E.b_.NO_CUSTOM_EMOJI : E.b_.CHAT,
            currentWord: L?.word ?? "",
            currentWordIsAtStart: L?.isAtStart === !0,
            currentFullWord: L?.fullWord ?? "",
            optionText:
                null != R
                    ? (0, a.getString)({ [R.name]: e.editorRef.current?.getCurrentCommandOptionValue() ?? [] }, R.name)
                    : "",
        },
        [P] = r.useState(() => new p.Ay(M));
    return (
        r.useEffect(() => {
            P.updateProps(M);
        }),
        r.useImperativeHandle(t, () => P, [P]),
        r.useEffect(() => {
            let e = (e) => S(e);
            return (
                P.on("change", e),
                P.on("update", y),
                () => {
                    P.off("change", e), P.off("update", y);
                }
            );
        }, [y, P]),
        r.useEffect(() => {
            let e = T.query?.typeInfo.stores;
            if (null != e) {
                let t = () => P.queryResults();
                for (let n of e) n.addChangeListener(t);
                return () => {
                    for (let n of e) n.removeChangeListener(t);
                };
            }
        }, [P, T.query?.typeInfo]),
        [T, P, D]
    );
}
