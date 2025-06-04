n.d(t, { Z: () => l });
var a = n(255367);
n(73800);
let r = { refresh_app: n(286813).Z },
    l = (e) => {
        let { task: t, onSubmit: n, disabled: l } = e;
        return (0, a.jsx)(a.Fragment, {
            children: t.components.map((e, i) => {
                let s = r[e.type];
                return void 0 === s
                    ? null
                    : (0, a.jsx)(
                          s,
                          {
                              configData: e.data,
                              onSubmit: n,
                              taskId: t.task_id,
                              flowId: t.flow_id,
                              assignmentId: t.assignment_id,
                              disabled: l
                          },
                          i
                      );
            })
        });
    };
