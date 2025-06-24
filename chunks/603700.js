n.d(t, { Z: () => a });
var r = n(255367);
n(73800);
let i = { refresh_app: n(286813).Z },
    a = (e) => {
        let { task: t, onSubmit: n, disabled: a } = e,
            l = i[t.ui_component.type];
        return null == l
            ? null
            : (0, r.jsx)(l, {
                  configData: t.ui_component.data,
                  onSubmit: n,
                  taskId: t.task_id,
                  flowId: t.flow_id,
                  assignmentId: t.assignment_id,
                  disabled: a
              });
    };
