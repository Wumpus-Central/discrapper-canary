n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(907862),
    s = n(703656),
    o = n(706454),
    c = n(981631),
    u = n(388032),
    d = n(11269);
function p(e) {
    let { onNavigateToQuestHome: t, onRender: n, onRequestClose: p, targetElementRef: f } = e,
        h = (0, l.e7)([o.default], () => o.default.locale),
        g = i.useCallback(() => {
            t(), (0, s.uL)(c.Z5c.QUEST_HOME_V2);
        }, [t]);
    return (
        i.useEffect(() => {
            n();
        }, [n]),
        (0, r.jsx)(a.J2, {
            actions: [
                {
                    text: u.intl.string(u.t.facYnD),
                    variant: "primary",
                    onClick: g,
                },
            ],
            align: "top",
            body: u.intl.string(u.t.o4NGXc),
            caretConfig: { align: "start" },
            gradientColor: "purple",
            graphic: {
                type: "image",
                src: d.Z,
            },
            onRequestClose: p,
            position: "right",
            size: "lg",
            targetElementRef: f,
            title: "en-US" === h || "en-GB" === h ? u.intl.string(u.t.EDDchq) : u.intl.string(u.t["2/2YdK"]),
        })
    );
}
