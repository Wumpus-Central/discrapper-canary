n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    l = n(907862),
    a = n(703656),
    o = n(937797),
    s = n(46140),
    c = n(981631),
    u = n(388032),
    d = n(11269);
function p(e) {
    let { onNavigateToQuestHome: t, onRender: n, onRequestClose: p, targetElementRef: f } = e,
        { enabled: h, variant: g } = o.GE.useConfig({ location: s.dr.QUEST_HOME_DESKTOP }),
        m = i.useCallback(() => {
            t(), (0, a.uL)(c.Z5c.QUEST_HOME_V2);
        }, [t]);
    if (
        (i.useEffect(() => {
            h && n();
        }, [h, n]),
        h)
    )
        return (0, r.jsx)(l.J2, {
            actions: [
                {
                    text: (function (e) {
                        switch (e) {
                            case o.yE.DISCOVER:
                                return u.intl.string(u.t.BeeKh0);
                            case o.yE.ACTION:
                                return u.intl.string(u.t["8Dp3R0"]);
                            case o.yE.EARN:
                                return u.intl.string(u.t.facYnD);
                            case o.yE.REWARD:
                                return u.intl.string(u.t.gL45vM);
                        }
                    })(g),
                    variant: "primary",
                    onClick: m,
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
            title: (function (e) {
                switch (e) {
                    case o.yE.DISCOVER:
                        return u.intl.string(u.t["2qdOVq"]);
                    case o.yE.ACTION:
                        return u.intl.string(u.t.E3Rw0y);
                    case o.yE.EARN:
                        return u.intl.string(u.t["2/2YdK"]);
                    case o.yE.REWARD:
                        return u.intl.string(u.t.mOH7r6);
                }
            })(g),
        });
}
