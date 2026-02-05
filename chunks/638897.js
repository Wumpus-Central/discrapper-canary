"use strict";
n.d(t, { A: () => E });
var r = n(64700),
    i = n(27867),
    a = n(311907),
    s = n(258363),
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
    g = n(307731);
function E(e, t, n) {
    let { channel: E, type: A } = e,
        [I, T] = r.useState(() => (0, p.Ur)()),
        y = (0, i.A)(),
        S = (0, a.bG)([c.Ay, f.default], () => {
            let e = f.default.getCurrentUser();
            return (null != E.guild_id && null != e ? c.Ay.getMember(E.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canMentionEveryone: v, hidePersonalInformation: C } = (0, a.cf)(
            [d.A, _.A],
            () => ({
                canMentionEveryone: E.isPrivate() || S || A === l.oU.RULES_INPUT || d.A.can(m.xBc.MENTION_EVERYONE, E),
                hidePersonalInformation: _.A.hidePersonalInformation,
            }),
            [E, A, S],
        ),
        { activeCommand: b, activeCommandOption: N } = (0, a.cf)([o.A], () => ({
            activeCommand: o.A.getActiveCommand(E.id),
            activeCommandOption: o.A.getActiveOption(E.id),
        })),
        R = (0, h.A)({
            navId: "channel-autocomplete",
            scrollerRef: n,
            state: I,
            onFocus: (e) => x.setSelectedIndex(e),
        }),
        O = e.editorRef.current?.getCurrentWord(),
        D = e.editorRef.current?.getSlateEditor(),
        L = null;
    null != D && (L = u.VW.getSelectedParentOfType(D, p.mk)?.[0] ?? null);
    let w = {
            ...e,
            navigator: R,
            activeCommand: b,
            activeCommandOption: N,
            activeInlineAutocompleteInput: L,
            canMentionUsers: A.users?.allowMentioning ?? !1,
            canMentionEveryone: v,
            hidePersonalInformation: C,
            hideMentionDescription: A === l.oU.RULES_INPUT,
            emojiIntention: A === l.oU.RULES_INPUT ? g.b_.COMMUNITY_CONTENT : g.b_.CHAT,
            currentWord: O?.word ?? "",
            currentWordIsAtStart: O?.isAtStart === !0,
            currentFullWord: O?.fullWord ?? "",
            optionText:
                null != N
                    ? (0, s.getString)({ [N.name]: e.editorRef.current?.getCurrentCommandOptionValue() ?? [] }, N.name)
                    : "",
        },
        [x] = r.useState(() => new p.Ay(w));
    return (
        r.useEffect(() => {
            x.updateProps(w);
        }),
        r.useImperativeHandle(t, () => x, [x]),
        r.useEffect(() => {
            let e = (e) => T(e);
            return (
                x.on("change", e),
                x.on("update", y),
                () => {
                    x.off("change", e), x.off("update", y);
                }
            );
        }, [y, x]),
        r.useEffect(() => {
            let e = I.query?.typeInfo.stores;
            if (null != e) {
                let t = () => x.queryResults();
                for (let n of e) n.addChangeListener(t);
                return () => {
                    for (let n of e) n.removeChangeListener(t);
                };
            }
        }, [x, I.query?.typeInfo]),
        [I, x, R]
    );
}
