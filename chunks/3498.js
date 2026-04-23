"use strict";
n.d(t, { z: () => a });
var r = n(412703);
n(861855);
var i = n(668824),
    s = n(183112);
let a = (e) => {
    try {
        let t = Object.entries(e.tasks)
            .map((e) => {
                let [t, n] = e;
                return [
                    t,
                    ((e) => {
                        switch (e.type) {
                            case r.n.WATCH_VIDEO:
                                return {
                                    type: r.n.WATCH_VIDEO,
                                    target: e.target,
                                    assets: (0, s.M1)(e.assets),
                                    messages: (0, s.bV)(e.messages),
                                };
                            case r.n.WATCH_VIDEO_ON_MOBILE:
                                return {
                                    type: r.n.WATCH_VIDEO_ON_MOBILE,
                                    target: e.target,
                                    assets: (0, s.I5)(e.assets),
                                    messages: (0, s.Tl)(e.messages),
                                };
                            case r.n.PLAY_ON_DESKTOP:
                                return { type: r.n.PLAY_ON_DESKTOP, target: e.target, applications: e.applications };
                            case r.n.STREAM_ON_DESKTOP:
                                return { type: r.n.STREAM_ON_DESKTOP, target: e.target, applications: e.applications };
                            case r.n.PLAY_ACTIVITY:
                                return { type: r.n.PLAY_ACTIVITY, target: e.target, applications: e.applications };
                            case r.n.PLAY_ON_XBOX:
                                return {
                                    type: r.n.PLAY_ON_XBOX,
                                    target: e.target,
                                    externalIds: e.external_ids,
                                    applications: e.applications,
                                };
                            case r.n.PLAY_ON_PLAYSTATION:
                                return {
                                    type: r.n.PLAY_ON_PLAYSTATION,
                                    target: e.target,
                                    externalIds: e.external_ids,
                                    applications: e.applications,
                                };
                            case r.n.ACHIEVEMENT_IN_GAME:
                                return {
                                    type: r.n.ACHIEVEMENT_IN_GAME,
                                    target: e.target,
                                    eventName: e.event_name,
                                    messages: {
                                        taskTitle: e.messages.task_title,
                                        taskDescription: e.messages.task_description,
                                    },
                                    applications: e.applications,
                                };
                            case r.n.ACHIEVEMENT_IN_ACTIVITY:
                                return {
                                    type: r.n.ACHIEVEMENT_IN_ACTIVITY,
                                    target: e.target,
                                    eventName: e.event_name,
                                    messages: {
                                        taskTitle: e.messages.task_title,
                                        taskDescription: e.messages.task_description,
                                    },
                                    applications: e.applications,
                                };
                            default:
                                return null;
                        }
                    })(n),
                ];
            })
            .filter((e) => {
                let [t, n] = e;
                return null !== n;
            });
        return { tasks: Object.fromEntries(t), joinOperator: e.join_operator };
    } catch (e) {
        return { tasks: {}, joinOperator: i.K.OR };
    }
};
