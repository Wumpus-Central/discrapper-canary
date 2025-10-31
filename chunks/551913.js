n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    l = n(907862),
    a = n(703656),
    s = n(937797),
    o = n(46140),
    c = n(981631),
    u = n(388032),
    d = n(11269);
function p(e) {
    let { onNavigateToQuestHome: t, onRender: n, onRequestClose: p, targetElementRef: f } = e,
        { enabled: m, variant: h } = s.GE.useConfig({ location: o.dr.QUEST_HOME_DESKTOP }),
        g = i.useCallback(() => {
            t(), (0, a.uL)(c.Z5c.QUEST_HOME_V2);
        }, [t]);
    if (
        (i.useEffect(() => {
            m && n();
        }, [m, n]),
        m)
    )
        return (0, r.jsx)(l.J2, {
            actions: [
                {
                    text: (function (e) {
                        switch (e) {
                            case s.yE.DISCOVER:
                                return u.intl.string(u.t.BeeKh0);
                            case s.yE.ACTION:
                                return u.intl.string(u.t["8Dp3R0"]);
                            case s.yE.EARN:
                                return u.intl.string(u.t.facYnD);
                            case s.yE.REWARD:
                                return u.intl.string(u.t.gL45vM);
                        }
                    })(h),
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
            title: (function (e) {
                switch (e) {
                    case s.yE.DISCOVER:
                        return u.intl.string(u.t["2qdOVq"]);
                    case s.yE.ACTION:
                        return u.intl.string(u.t.E3Rw0y);
                    case s.yE.EARN:
                        return u.intl.string(u.t["2/2YdK"]);
                    case s.yE.REWARD:
                        return u.intl.string(u.t.mOH7r6);
                }
            })(h),
        });
}
