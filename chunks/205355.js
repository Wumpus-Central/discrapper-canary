n.d(t, { Z: () => o }), n(47120);
var i = n(544891),
    l = n(570140),
    r = n(981631);
let a = ''.concat(r.dGm, '/api/v2/scheduled-maintenances'),
    s = ''.concat(r.dGm, '/api/v2/incidents/unresolved.json'),
    o = {
        checkIncidents() {
            Promise.all([
                i.tn.get({
                    url: ''.concat(a, '/active.json'),
                    rejectWithError: !0
                }),
                i.tn.get(s)
            ]).then((e) => {
                let [t, n] = e,
                    [i] = t.body.scheduled_maintenances,
                    [r] = n.body.incidents;
                l.Z.dispatch({
                    type: 'STATUS_PAGE_INCIDENT',
                    incident: r || i
                });
            });
        },
        checkScheduledMaintenances() {
            i.tn
                .get({
                    url: ''.concat(a, '/upcoming.json'),
                    rejectWithError: !0
                })
                .then((e) => {
                    let [t] = e.body.scheduled_maintenances;
                    l.Z.dispatch({
                        type: 'STATUS_PAGE_SCHEDULED_MAINTENANCE',
                        maintenance: t
                    });
                });
        },
        ackScheduledMaintenance() {
            l.Z.dispatch({ type: 'STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK' });
        }
    };
