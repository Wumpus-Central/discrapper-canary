n.d(t, { Z: () => a });
var r = n(255367);
n(73800);
let i = { refresh_app: n(286813).Z },
    a = (e) => {
        let { task: t, onSubmit: n, disabled: a } = e;
        return (0, r.jsx)(r.Fragment, {
            children: t.components.map((e, l) => {
                let c = i[e.type];
                return void 0 === c
                    ? null
                    : (0, r.jsx)(
                          c,
                          {
                              configData: e.data,
                              onSubmit: n,
                              taskId: t.task_id,
                              flowId: t.flow_id,
                              assignmentId: t.assignment_id,
                              disabled: a
                          },
                          l
                      );
            })
        });
    };
