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
    E = n(652215),
    m = n(307731);
let g = new Map([["thread", new Set(["name"])]]);
function A(e, t, n) {
    let { channel: A, type: I } = e,
        [T, S] = r.useState(() => (0, p.Ur)()),
        y = (0, i.A)(),
        N = (0, s.bG)([c.Ay, f.default], () => {
            let e = f.default.getCurrentUser();
            return (null != A.guild_id && null != e ? c.Ay.getMember(A.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canMentionEveryone: v, hidePersonalInformation: C } = (0, s.cf)(
            [d.A, _.A],
            () => ({
                canMentionEveryone: A.isPrivate() || N || I === l.oU.RULES_INPUT || d.A.can(E.xBc.MENTION_EVERYONE, A),
                hidePersonalInformation: _.A.hidePersonalInformation,
            }),
            [A, I, N],
        ),
        { activeCommand: O, activeCommandOption: R } = (0, s.cf)([o.A], () => ({
            activeCommand: o.A.getActiveCommand(A.id),
            activeCommandOption: o.A.getActiveOption(A.id),
        })),
        b = r.useMemo(
            () => O?.untranslatedName != null && R?.name != null && (g.get(O.untranslatedName)?.has(R.name) ?? !1),
            [O?.untranslatedName, R?.name],
        ),
        D = (0, h.A)({
            navId: "channel-autocomplete",
            scrollerRef: n,
            state: T,
            onFocus: (e) => x.setSelectedIndex(e),
        }),
        L = e.editorRef.current?.getCurrentWord(),
        w = e.editorRef.current?.getSlateEditor(),
        M = null;
    null != w && (M = u.VW.getSelectedParentOfType(w, p.mk)?.[0] ?? null);
    let P = {
            ...e,
            navigator: D,
            activeCommand: O,
            activeCommandOption: R,
            activeInlineAutocompleteInput: M,
            canMentionUsers: I.users?.allowMentioning ?? !1,
            canMentionEveryone: v,
            hidePersonalInformation: C,
            hideMentionDescription: I === l.oU.RULES_INPUT,
            emojiIntention:
                I === l.oU.RULES_INPUT
                    ? m.EmojiIntention.COMMUNITY_CONTENT
                    : b
                      ? m.EmojiIntention.NO_CUSTOM_EMOJI
                      : m.EmojiIntention.CHAT,
            currentWord: L?.word ?? "",
            currentWordIsAtStart: L?.isAtStart === !0,
            optionText:
                null != R
                    ? (0, a.getString)({ [R.name]: e.editorRef.current?.getCurrentCommandOptionValue() ?? [] }, R.name)
                    : "",
        },
        [x] = r.useState(() => new p.Ay(P));
    return (
        r.useEffect(() => {
            x.updateProps(P);
        }),
        r.useImperativeHandle(t, () => x, [x]),
        r.useEffect(() => {
            let e = (e) => S(e);
            return (
                x.on("change", e),
                x.on("update", y),
                () => {
                    x.off("change", e), x.off("update", y);
                }
            );
        }, [y, x]),
        r.useEffect(() => {
            let e = T.query?.typeInfo.stores;
            if (null != e) {
                let t = () => x.queryResults();
                for (let n of e) n.addChangeListener(t);
                return () => {
                    for (let n of e) n.removeChangeListener(t);
                };
            }
        }, [x, T.query?.typeInfo]),
        [T, x, D]
    );
}
