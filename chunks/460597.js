n.d(t, { f: () => s }), n(47120);
var i = n(742635);
let r = (e) => {
        let t = {};
        for (let n of Object.keys(e)) {
            let i = e[n];
            null != i &&
                (t[n] = {
                    eventName: i.event_name,
                    target: i.target,
                    externalIds: i.external_ids
                });
        }
        return t;
    },
    a = (e) => {
        let t = {};
        for (let n of Object.keys(e)) {
            let i = e[n];
            null != i &&
                (t[n] = {
                    eventName: i.event_name,
                    title: i.title,
                    target: i.target,
                    description: i.description
                });
        }
        return t;
    },
    s = (e) => {
        switch (e.type) {
            case i.L.FIRST_PARTY:
                return {
                    type: i.L.FIRST_PARTY,
                    tasks: r(e.tasks),
                    joinOperator: e.join_operator
                };
            case i.L.THIRD_PARTY:
                return {
                    type: i.L.THIRD_PARTY,
                    tasks: a(e.tasks),
                    enrollmentUrl: e.enrollment_url,
                    developerApplicationId: e.developer_application_id,
                    joinOperator: e.join_operator
                };
        }
    };
