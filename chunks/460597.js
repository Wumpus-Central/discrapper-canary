(n.d(t, { _: () => s }), n(388685), n(953529), n(467055));
var r = n(754700);
n(742635);
var i = n(458708),
    a = n(608591);
let o = (e) => {
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
    s = (e) => {
        try {
            let t = Object.entries(e.tasks)
                .map((e) => {
                    let [t, n] = e;
                    return [t, o(n)];
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
            return {
                tasks: {},
                joinOperator: i.r.OR
            };
        }
    };
