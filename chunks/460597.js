n.d(t, {
    _: () => u,
    f: () => l
}),
    n(388685),
    n(953529),
    n(467055);
var r = n(754700),
    i = n(742635),
    a = n(608591);
let o = (e) => {
        let t = {};
        for (let n of Object.keys(e)) {
            let r = e[n];
            null != r &&
                (t[n] = {
                    eventName: r.event_name,
                    target: r.target,
                    externalIds: r.external_ids
                });
        }
        return t;
    },
    s = (e) => {
        let t = {};
        for (let n of Object.keys(e)) {
            let r = e[n];
            null != r &&
                (t[n] = {
                    eventName: r.event_name,
                    title: r.title,
                    target: r.target,
                    description: r.description
                });
        }
        return t;
    },
    l = (e) => {
        switch (e.type) {
            case i.L.FIRST_PARTY:
                return {
                    type: i.L.FIRST_PARTY,
                    tasks: o(e.tasks),
                    joinOperator: e.join_operator
                };
            case i.L.THIRD_PARTY:
                return {
                    type: i.L.THIRD_PARTY,
                    tasks: s(e.tasks),
                    enrollmentUrl: e.enrollment_url,
                    developerApplicationId: e.developer_application_id,
                    joinOperator: e.join_operator
                };
        }
    },
    c = (e) => {
        switch (e.type) {
            case r.X.WATCH_VIDEO:
                return {
                    type: r.X.WATCH_VIDEO,
                    target: e.target,
                    assets: (0, a._c)(e.assets),
                    messages: (0, a.I9)(e.messages)
                };
            case r.X.WATCH_VIDEO_ON_MOBILE:
                return {
                    type: r.X.WATCH_VIDEO_ON_MOBILE,
                    target: e.target,
                    assets: (0, a.c1)(e.assets),
                    messages: (0, a.jZ)(e.messages)
                };
            case r.X.PLAY_ON_DESKTOP:
                return {
                    type: r.X.PLAY_ON_DESKTOP,
                    target: e.target
                };
            case r.X.STREAM_ON_DESKTOP:
                return {
                    type: r.X.STREAM_ON_DESKTOP,
                    target: e.target
                };
            case r.X.PLAY_ACTIVITY:
                return {
                    type: r.X.PLAY_ACTIVITY,
                    target: e.target
                };
            case r.X.PLAY_ON_XBOX:
                return {
                    type: r.X.PLAY_ON_XBOX,
                    target: e.target,
                    externalIds: e.external_ids
                };
            case r.X.PLAY_ON_PLAYSTATION:
                return {
                    type: r.X.PLAY_ON_PLAYSTATION,
                    target: e.target,
                    externalIds: e.external_ids
                };
            case r.X.ACHIEVEMENT_IN_GAME:
                return {
                    type: r.X.ACHIEVEMENT_IN_GAME,
                    target: e.target,
                    eventName: e.event_name,
                    messages: {
                        taskTitle: e.messages.task_title,
                        taskDescription: e.messages.task_description
                    }
                };
            case r.X.ACHIEVEMENT_IN_ACTIVITY:
                return {
                    type: r.X.ACHIEVEMENT_IN_ACTIVITY,
                    target: e.target,
                    eventName: e.event_name,
                    messages: {
                        taskTitle: e.messages.task_title,
                        taskDescription: e.messages.task_description
                    }
                };
            default:
                return null;
        }
    },
    u = (e) => {
        if (null != e)
            try {
                let t = Object.entries(e.tasks)
                    .map((e) => {
                        let [t, n] = e;
                        return [t, c(n)];
                    })
                    .filter((e) => {
                        let [t, n] = e;
                        return null !== n;
                    });
                return {
                    tasks: Object.fromEntries(t),
                    joinOperator: e.join_operator
                };
            } catch (e) {
                return;
            }
    };
