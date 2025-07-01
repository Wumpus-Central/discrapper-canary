(n.d(t, { Z: () => a }), n(388685));
var i = n(544891),
    r = n(570140),
    l = n(981631);
let o = ''.concat(l.dGm, '/api/v2/scheduled-maintenances'),
    s = ''.concat(l.dGm, '/api/v2/incidents/unresolved.json'),
    a = {
        checkIncidents() {
            Promise.all([
                i.tn.get({
                    url: ''.concat(o, '/active.json'),
                    rejectWithError: !0
                }),
                i.tn.get(s)
            ]).then((e) => {
                let [t, n] = e,
                    [i] = t.body.scheduled_maintenances,
                    [l] = n.body.incidents;
                r.Z.dispatch({
                    type: 'STATUS_PAGE_INCIDENT',
                    incident: l || i
                });
            });
        },
        checkScheduledMaintenances() {
            i.tn
                .get({
                    url: ''.concat(o, '/upcoming.json'),
                    rejectWithError: !0
                })
                .then((e) => {
                    let [t] = e.body.scheduled_maintenances;
                    r.Z.dispatch({
                        type: 'STATUS_PAGE_SCHEDULED_MAINTENANCE',
                        maintenance: t
                    });
                });
        },
        ackScheduledMaintenance() {
            r.Z.dispatch({ type: 'STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK' });
        }
    };
