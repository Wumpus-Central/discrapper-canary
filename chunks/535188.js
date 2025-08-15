n.d(t, { Z: () => l });
var r = n(951288);
n(647438);
var i = n(132392),
    a = n(342781);
let l = (e) => {
    var t;
    let { onSubmit: n, disabled: l } = e,
        { task: c } = (0, i.T)(),
        o = a.o[c.ui_component.component.type];
    return null == o
        ? null
        : (0, r.jsx)(o, {
              configData: c.ui_component.component.data,
              onSubmit: n,
              taskId: c.task_id,
              flowId: null == (t = c.flow_context) ? void 0 : t.flow_id,
              assignmentId: c.assignment_id,
              disabled: l,
          });
};
