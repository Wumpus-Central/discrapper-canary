n.d(t, { Z: () => s }), n(47120);
var r = n(544891),
    i = n(570140),
    l = n(981631);
let o = ''.concat(l.dGm, '/api/v2/scheduled-maintenances'),
    a = ''.concat(l.dGm, '/api/v2/incidents/unresolved.json'),
    s = {
        checkIncidents() {
            Promise.all([
                r.tn.get({
                    url: ''.concat(o, '/active.json'),
                    rejectWithError: !0
                }),
                r.tn.get(a)
            ]).then((e) => {
                let [t, n] = e,
                    [r] = t.body.scheduled_maintenances,
                    [l] = n.body.incidents;
                i.Z.dispatch({
                    type: 'STATUS_PAGE_INCIDENT',
                    incident: l || r
                });
            });
        },
        checkScheduledMaintenances() {
            r.tn
                .get({
                    url: ''.concat(o, '/upcoming.json'),
                    rejectWithError: !0
                })
                .then((e) => {
                    let [t] = e.body.scheduled_maintenances;
                    i.Z.dispatch({
                        type: 'STATUS_PAGE_SCHEDULED_MAINTENANCE',
                        maintenance: t
                    });
                });
        },
        ackScheduledMaintenance() {
            i.Z.dispatch({ type: 'STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK' });
        }
    };
