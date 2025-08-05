(n.d(t, { Z: () => s }), n(388685));
var r = n(544891),
    i = n(570140),
    l = n(981631);
let a = ''.concat(l.dGm, '/api/v2/scheduled-maintenances'),
    o = ''.concat(l.dGm, '/api/v2/incidents/unresolved.json'),
    s = {
        checkIncidents() {
            Promise.all([
                r.tn.get({
                    url: ''.concat(a, '/active.json'),
                    rejectWithError: !0
                }),
                r.tn.get(o)
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
                    url: ''.concat(a, '/upcoming.json'),
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
